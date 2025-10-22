const User = require('../models/User');
const { Op } = require("sequelize");

class UserService {
  constructor() {
    if (UserService.instance) {
      return UserService.instance;
    }
    UserService.instance = this;
    return this;
  }

  // Helper method for pagination and common query options
  // _buildQueryOptions(args = {}) {
  //   const page = +args.page || 1;
  //   const pageSize = +args.pageSize || 10;
  //   const offset = (page - 1) * pageSize;
  //   const limit = pageSize;

  //   let queryOptions = {
  //     where: {},
  //     include: []
  //   };

  //   // Add school_id filter if provided
  //   if (args.school_id) {
  //     queryOptions.where['school_id'] = args.school_id;
  //   }

  //   // Add pagination if not disabled
  //   if (args?.isPaginated !== false) {
  //     queryOptions.limit = limit;
  //     queryOptions.offset = offset;
  //   }

  //   return queryOptions;
  // }

  // // Get all users without role filtering
  // async getAllUsers(args = {}) {
  //   try {
  //     const queryOptions = this._buildQueryOptions(args);
      
  //     // Include all role-specific data with correct aliases
  //     queryOptions.include = [
  //       {
  //         model: Teacher,
  //         as: 'teacherProfile', // Use correct alias
  //         required: false
  //       },
  //       {
  //         model: Student,
  //         as: 'studentProfile', // Use correct alias
  //         required: false
  //       }
  //     ];

  //     const users = await User.findAndCountAll(queryOptions);
      
  //     return {
  //       users: users.rows,
  //       total: users.count,
  //       message: "All users fetched successfully"
  //     };
  //   } catch (error) {
  //     console.error('Error fetching all users:', error);
  //     throw new Error('Error fetching all users: ' + error.message);
  //   }
  // }

  // // Get users by specific role
  // async getUsersByRole(args = {}) {
  //   try {
  //     const queryOptions = this._buildQueryOptions(args);
  //     queryOptions.where['roleId'] = args.roleId;

  //     const users = await User.findAndCountAll(queryOptions);
      
  //     const roleNames = {
  //       1: 'SuperAdmins',
  //       2: 'Admins',
  //       3: 'Teachers', 
  //       4: 'Students'
  //     };
      
  //     return {
  //       users: users.rows,
  //       total: users.count,
  //       message: `${roleNames[args.roleId]} fetched successfully`
  //     };
  //   } catch (error) {
  //     console.error('Error fetching users by role:', error);
  //     throw new Error('Error fetching users by role: ' + error.message);
  //   }
  // }

  // // Get teachers only (roleId = 3)
  // async getTeachers(args = {}) {
  //   try {
  //     const queryOptions = this._buildQueryOptions(args);
  //     queryOptions.where['roleId'] = 3; // Teacher role ID

  //     // Include teacher profile data with correct alias
  //     queryOptions.include.push({
  //       model: Teacher,
  //       as: 'teacherProfile', // Changed from 'teacher' to 'teacherProfile'
  //       required: false
  //     });

  //     const users = await User.findAndCountAll(queryOptions);
      
  //     return {
  //       users: users.rows,
  //       total: users.count,
  //       message: "Teachers fetched successfully"
  //     };
  //   } catch (error) {
  //     console.error('Error fetching teachers:', error);
  //     throw new Error('Error fetching teachers: ' + error.message);
  //   }
  // }

  // // Get students only (roleId = 4)
  // async getStudents(args = {}) {
  //   try {
  //     const queryOptions = this._buildQueryOptions(args);
  //     queryOptions.where['roleId'] = 4; // Student role ID

  //     // Include student profile data with correct alias
  //     queryOptions.include.push({
  //       model: Student,
  //       as: 'studentProfile', // Changed from 'student' to 'studentProfile'
  //       required: false
  //     });

  //     const users = await User.findAndCountAll(queryOptions);
      
  //     return {
  //       users: users.rows,
  //       total: users.count,
  //       message: "Students fetched successfully"
  //     };
  //   } catch (error) {
  //     console.error('Error fetching students:', error);
  //     throw new Error('Error fetching students: ' + error.message);
  //   }
  // }

  // // Create user with role-based logic
  // async addUser(userData) {
  //   try {
  //     // Create user first
  //     const newUser = await User.create(userData);

  //     // Role-based additional table entries
  //     if (userData.roleId === 3) {
  //       // Create teacher entry
  //       await Teacher.create({
  //         user_id: newUser.id,
  //         school_id: userData.school_id,
  //         employee_id: `EMP${newUser.id}${Date.now()}`,
  //         subject_specialization: userData.subject_specialization || 'General',
  //         qualification: userData.qualification || 'Not specified'
  //       });
  //     } else if (userData.roleId === 4) {
  //       // Create student entry
  //       await Student.create({
  //         user_id: newUser.id,
  //         school_id: userData.school_id,
  //         student_id: `STU${newUser.id}${Date.now()}`,
  //         class: userData.class || 'Not assigned',
  //         section: userData.section || 'Not assigned',
  //         parent_name: userData.parent_name || 'Not provided',
  //         parent_phone: userData.parent_phone || 'Not provided',
  //         address: userData.address || 'Not provided'
  //       });
  //     }

  //     return newUser;
  //   } catch (error) {
  //     console.error('Error adding user:', error);
  //     throw new Error('Error adding user: ' + error.message);
  //   }
  // }

  // // Update user basic information
  // async updateUser(id, updateData) {
  //   try {
  //     const user = await User.findByPk(id);
  //     if (!user) {
  //       throw new Error('User not found');
  //     }

  //     await user.update(updateData);
  //     return user;
  //   } catch (error) {
  //     console.error('Error updating user:', error);
  //     throw new Error('Error updating user: ' + error.message);
  //   }
  // }

  // // Update teacher profile
  // async updateTeacherProfile(user_id, profileData) {
  //   try {
  //     const teacher = await Teacher.findOne({ where: { user_id } });
  //     if (!teacher) {
  //       throw new Error('Teacher profile not found');
  //     }

  //     await teacher.update(profileData);
  //     return teacher;
  //   } catch (error) {
  //     console.error('Error updating teacher profile:', error);
  //     throw new Error('Error updating teacher profile: ' + error.message);
  //   }
  // }

  // // Update student profile
  // async updateStudentProfile(user_id, profileData) {
  //   try {
  //     const student = await Student.findOne({ where: { user_id } });
  //     if (!student) {
  //       throw new Error('Student profile not found');
  //     }

  //     await student.update(profileData);
  //     return student;
  //   } catch (error) {
  //     console.error('Error updating student profile:', error);
  //     throw new Error('Error updating student profile: ' + error.message);
  //   }
  // }

  // // Get user by ID
  // async getUserById(id) {
  //   try {
  //     const user = await User.findByPk(id);
  //     if (!user) {
  //       throw new Error('User not found');
  //     }

  //     return user;
  //   } catch (error) {
  //     console.error('Error finding user:', error);
  //     throw new Error('Error finding user: ' + error.message);
  //   }
  // }

  // // Get user profile by ID with role-specific data
  // async getUserProfileById(id) {
  //   try {
  //     const user = await User.findByPk(id);
  //     if (!user) {
  //       throw new Error('User not found');
  //     }

  //     let profile = null;
  //     if (user.roleId === 3) {
  //       // Get teacher profile
  //       profile = await Teacher.findOne({ where: { user_id: user.id } });
  //     } else if (user.roleId === 4) {
  //       // Get student profile
  //       profile = await Student.findOne({ where: { user_id: user.id } });
  //     }

  //     return { user, profile };
  //   } catch (error) {
  //     console.error('Error fetching user profile:', error);
  //     throw new Error('Error fetching user profile: ' + error.message);
  //   }
  // }
}

module.exports = new UserService();
