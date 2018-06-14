import PatientList from './list.vue'
import PatientCreate from './create.vue'

export default [
  {
    path: '/patient',
    name: 'PatientList',
    component: PatientList
  },
  { 
  	path: '/patient/create',
  	name: 'PatientCreate',
  	component: PatientCreate
  }
]
