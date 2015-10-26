import TodoApp from './TodoApp'
import TodoMain from './TodoMain'
import SampleRoute from './SampleRoute'
export default {
  path: '/',
  component: TodoApp,
  indexRoute: { component: TodoMain },
  childRoutes: [
    { path: 'sampleRoute', component: SampleRoute }
  ]
}
