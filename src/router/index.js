import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Student from '../views/Student.vue'
import Dashboard from '../views/Dashboard.vue'
import Profile from '../views/Profile.vue'
import Agenda from '../views/Agenda.vue'
import AgendaCourse from '../views/AgendaCourse.vue'
import AgendaExam from '../views/AgendaExam.vue'
import Help from '../views/Help.vue'
import Mail from '../views/Mail.vue'
import Cloud from '../views/Cloud.vue'
import Outline from '../views/Outline.vue'
import Module from '../views/Module.vue'
import Assignment from '../views/Assignment.vue'
import Discussion from '../views/Discussion.vue'
import Mark from '../views/Mark.vue'
import Result from '../views/Result.vue'
import ShowResult from '../views/ShowResult.vue'
import MailChange from '../views/MailChange.vue'
import Question from '../views/Question.vue'
import TeacherGrade from '../views/TeacherGrade.vue'
import Group from '../views/Group.vue'
import File from '../views/File.vue'
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/student',
    name: 'Student',
    component: Student,
    children:[
      {path:'/student/dashboard', component: Dashboard },
      {path:'/student/profile', component: Profile },
      {path:'/student/agenda', component: Agenda },
      {path:'/student/agenda/course', component: AgendaCourse },
      {path:'/student/agenda/exam', component: AgendaExam },
      {path:'/student/mail', component: Mail },
      {path:'/student/mail/1', component: MailChange },
      {path:'/student/group', component: Group },
      {path:'/student/help', component: Help },
      {path:'/student/31025', component:Cloud},
      {path:'/student/31025/outline', component:Outline},
      {path:'/student/31025/module', component:Module},
      {path:'/student/31025/assignment', component:Assignment},
      {path:'/student/31025/discussion', component:Discussion},
      {path:'/student/31025/mark', component:Mark},
      {path:'/student/result', component:Result},
      {path:'/student/result2', component:ShowResult},
      {path:'/student/question', component:Question},
      {path:'/student/teacher-grade', component:TeacherGrade},
      {path:'/student/group/file', component:File},
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
