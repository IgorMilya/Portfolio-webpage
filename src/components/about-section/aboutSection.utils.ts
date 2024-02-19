import { TabItemsDataTypes, TabTextTypes } from '@/types'

export const tabItemsData: TabItemsDataTypes[] = ['skills', 'education', 'certificates']
export const tabTextData: TabTextTypes[] = [
  {
    tabValue: 'skills',
    text: ['React, React-router, Hooks', 'TypeScript', 'Redux/Redux Toolkid & RTK Query', 'JavaScript(ES6+)', 'Next.js', 'Axios, Fetch', 'MaterialUI & Styled Components', 'Formik, Yup', 'Responsive Web Design', 'Git', 'Postman', 'Worked with Node.js', 'Worked with Express.js', 'Worked with Mongoose ODM', 'Worked with MongoDB'],
  },
  {
    tabValue: 'education',
    text: ['FrontEnd Dan.IT Academy', 'University of VU Information System and Cyber Security'],
  }, {
    tabValue: 'certificates',
    text: ['Certificate of Completion | FrontEnd Development'],
  },
]