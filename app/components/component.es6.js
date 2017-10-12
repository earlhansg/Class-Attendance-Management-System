import angular from 'angular';
import Menu from './menu/menu.es6';
import Profile from './profile/profile.es6';
import Student from './students/students.es6';
import Register from './registration/register.es6';
import Section from './sections/sections.es6';
import SectionAdd from './sections/sections-add.es6';
import Attendance from './attendance/attendance.es6';

export default angular.module('app.components',[
  Menu.name,
  Profile.name,
  Student.name,
  Register.name,
  Section.name,
  SectionAdd.name,
  Attendance.name
]);
