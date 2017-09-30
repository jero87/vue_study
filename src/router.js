

const part01report01 = r => require.ensure([], () => r(require('./components/content/part01/part01report01.vue')), 'part01report01')
const part01report02 = r => require.ensure([], () => r(require('./components/content/part01/part01report02.vue')), 'part01report02')
const part02report01 = r => require.ensure([], () => r(require('./components/content/part02/part02report01.vue')), 'part02report01')

const routes = [
    
    {
        path: '/part01/part01report01',
        component: part01report01
    },
    {
        path: '/part01/part01report02',
        component: part01report02
    },
   
    {
        path: '/part02/part02report01',
        component: part02report01
    },
    {
        path: '/part01',
        redirect: '/part01/part01report01'
    },
     {
        path: '/part02',
        redirect: '/part02/part02report01'
    },
    {
        path: '*',
        redirect: '/part01'
    }

]

export default routes