var router = [{
        path: '/',
        redirect: {
            name: 'homeIndex'
        }
    },
    {
        path: '/homeIndex',
        name: 'homeIndex',
        component: resolve => require(['../views/homeIndex/homeIndex'], resolve),
        children: [{
                path: '/homeIndex/home', //首页
                name: 'home',
                component: resolve => require(['../views/home/home'], resolve)
            },
            {
                path: '/homeIndex/micoShaping', //微整形中心
                name: 'micoShaping',
                component: resolve => require(['../views/micoShaping/micoShaping'], resolve)
            },
            {
                path: '/homeIndex/skin', //皮肤美容中心
                name: 'skin',
                component: resolve => require(['../views/skin/skin'], resolve)
            },
            {
                path: '/homeIndex/expertTeam', //专家团队
                name: 'expertTeam',
                component: resolve => require(['../views/expertTeam/expertTeam'], resolve)
            },
            {
                path: '/homeIndex/case', //案例中心
                name: 'case',
                component: resolve => require(['../views/case/case'], resolve)
            },
            {
                path: '/homeIndex/aboutUs', //案例中心
                name: 'aboutUs',
                component: resolve => require(['../views/aboutUs/aboutUs'], resolve)
            },
            {
                path: '/homeIndex/consultation', //医美咨询
                name: 'consultation',
                component: resolve => require(['../views/consultation/consultation'], resolve)
            },
            {
                path: '/homeIndex/memberCenter', //会员中心
                name: 'memberCenter',
                component: resolve => require(['../views/memberCenter/memberCenter'], resolve)
            }
        ],
        redirect: "/homeIndex/home"
    }
]
export default router