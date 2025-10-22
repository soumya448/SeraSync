const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User, Role, Permission } = require('../models');

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'your_refresh_secret';

// Login Controller
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({
      where: { username },
      include: [
        {
          model: Role,
          as: 'role',
          include: [
            {
              model: Permission,
              as: 'permissions',
              
            },
          ],
        },
      ],
    });
    console.log("userdata",user)
    if (!user) {
      return res.status(401).json({ status: 0, message: 'Invalid email or password' });
    }
    //const saltRounds = 10; // The number of rounds to salt the password
   // const hashedPassword = await bcrypt.hash(password, saltRounds);
    //  console.log("hashedPassword",hashedPassword)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ status: 0, message: 'Invalid email or password' });
    }

    const accessToken = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '2d' });
    const refreshToken = jwt.sign({ id: user.id }, JWT_REFRESH_SECRET, { expiresIn: '7d' });

    const response = {
      status: 1,
      message: '',
      data: {
        user: {
          id: user.id,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          mobileNo: user.mobileNo,
          email: user.email,
          avatar: user.avatar,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
          role: user.role,
          permissions: user.role.permissions,
        },
        accessToken,
        refreshToken,
      },
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 0, message: 'Internal Server Error' });
  }
};

module.exports = { login };
