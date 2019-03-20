/* Layout */
const Layout = () => import('../views/layout/Layout')

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
const Super = 'Super Administrator'
const Admin = 'Admin'

// 管理一般路由
export const routeManage = [
  {
    path: '/api_excel',
    component: Layout,
    redirect: '/api_excel/index',
    name: 'Excel-List',
    meta: { title: '批量测试管理', icon: 'ico-table', role: Admin },
    children: [
      { path: '/api_excel/edit/:id', name: 'EditExcel', component: () => import('@/views/api_excel/edit'), hidden: true },
      {
        path: '/api_excel/add',
        name: 'AddExcel',
        component: () => import('@/views/api_excel/add'),
        meta: { title: '上传测试', icon: 'excel', role: Admin }
      },
      {
        path: '/api_excel/index',
        name: 'Excel',
        component: () => import('@/views/api_excel/index'),
        meta: { title: '测试管理', icon: 'ico-aliyun', role: Admin }
      },
      { path: '/api_param/add', name: 'AddApiParam', component: () => import('@/views/api_param/add'), hidden: true },
      { path: '/api_param/edit/:id', name: 'EditApiParam', component: () => import('@/views/api_param/edit'), hidden: true },
      {
        path: '/api_param/index',
        name: 'ApiParam',
        component: () => import('@/views/api_param/index'),
        meta: { title: '接口列表', icon: 'api', role: Admin }
      }
    ]
  }
]

export const routerAdmin = [
  // { path: '/', redirect: '/index', hidden: true },

  {
    path: '/category',
    component: Layout,
    redirect: '/category/index',
    name: 'Category-Nav',
    meta: { title: '栏目菜单', icon: 'category', role: Super },
    children: [
      { path: '/category/add', name: 'AddCategory', component: () => import('@/views/category/add'), meta: { title: '添加栏目' }, hidden: true },
      { path: '/category/edit/:id', name: 'EditCategory', component: () => import('@/views/category/edit'), hidden: true },
      {
        path: '/category/index',
        name: 'Category',
        component: () => import('@/views/category/index'),
        meta: { title: '栏目管理', icon: 'ico-category', role: Super }
      },
      { path: '/nav/add', name: 'AddNav', component: () => import('@/views/nav/add'), hidden: true },
      { path: '/nav/edit/:id', name: 'EditNav', component: () => import('@/views/nav/edit'), hidden: true },
      {
        path: '/nav',
        name: 'Nav',
        component: () => import('@/views/nav'),
        meta: { title: '导航管理', icon: 'nav', role: Super }
      },
      { path: '/tag/add', name: 'AddTag', component: () => import('@/views/tag/add'), meta: { title: '添加标签' }, hidden: true },
      { path: '/tag/edit/:id', name: 'EditTag', component: () => import('@/views/tag/edit'), hidden: true },
      {
        path: '/tag',
        name: 'Tag',
        component: () => import('@/views/tag/index'),
        meta: { title: '标签列表', icon: 'tag', role: Super }
      }
    ]
  },

  {
    path: '/article',
    component: Layout,
    // redirect: '/article',
    name: 'Article-List',
    meta: { title: '文章管理', icon: 'article', role: Super },
    children: [
      { path: '/article/edit/:id', name: 'EditArticle', component: () => import('@/views/article/edit'), hidden: true },
      {
        path: '/article/index',
        name: 'Article',
        component: () => import('@/views/article/index'),
        meta: { title: '文章管理', icon: 'ico-article', role: Super }
      },
      {
        path: '/article/add',
        name: 'AddArticle',
        component: () => import('@/views/article/add'),
        meta: { title: '添加文章', icon: 'add', role: Super }
      }
    ]
  },

  {
    path: '/list',
    component: Layout,
    redirect: '/task',
    name: '公交',
    meta: { title: '公交管理', icon: 'bus', role: Super },
    children: [
      { path: '/task/search', name: 'search', component: () => import('@/views/task/search'), hidden: true },
      { path: '/task/newBus', name: 'NewBus', component: () => import('@/views/task/newBus'), hidden: true },
      { path: '/task/edit/:id', name: 'taskEdit', component: () => import('@/views/task/edit'), hidden: true },
      {
        path: '/task',
        name: '定时任务',
        component: () => import('@/views/task/index'),
        meta: { title: '定时任务', icon: 'task', role: Super }
      },
      { path: 'lines/add', name: 'linesAdd', component: () => import('@/views/lines/add'), hidden: true },
      { path: 'lines/edit/:id', name: 'linesEdit', component: () => import('@/views/lines/edit'), hidden: true },
      {
        path: 'lines',
        name: '公交列表',
        component: () => import('@/views/lines/index'),
        meta: { title: '公交列表', icon: 'table', role: Super }
      },
      {
        path: 'config',
        name: '配置管理',
        component: () => import('@/views/lines/index'),
        meta: { title: '配置列表', icon: 'table', role: Super }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree', role: Super },
        hidden: true
      }
    ]
  },

  {
    path: 'user',
    component: Layout,
    redirect: '/user',
    name: '权限',
    meta: { title: '权限管理', icon: 'auth', role: Super },
    children: [
      { path: 'index', name: 'userIndex', component: () => import('@/views/user/index'), hidden: true },
      { path: 'password', name: 'userPassword', component: () => import('@/views/user/password'), hidden: true },
      { path: '/user/add', name: 'AddUser', component: () => import('@/views/user/add'), hidden: true },
      { path: '/user/edit/:id', name: 'EditUser', component: () => import('@/views/user/edit'), hidden: true },
      {
        path: '/user',
        name: '用户管理',
        component: () => import('@/views/user/index'),
        meta: { title: '用户列表', icon: 'user', role: Super }
      },
      { path: '/permission/add', name: 'AddPermission', component: () => import('@/views/permission/add'), hidden: true },
      { path: '/permission/edit/:id', name: 'EditPermission', component: () => import('@/views/permission/edit'), hidden: true },
      {
        path: '/permission',
        name: '权限列表',
        component: () => import('@/views/permission/index'),
        meta: { title: '权限列表', icon: 'permission', role: Super }
      },

      { path: '/role/add', name: 'AddRole', component: () => import('@/views/role/add'), hidden: true },
      { path: '/role/edit/:id', name: 'EditRole', component: () => import('@/views/role/edit'), hidden: true },
      {
        path: '/role',
        name: '角色管理',
        component: () => import('@/views/role/index'),
        meta: { title: '角色管理', icon: 'role', role: Super }
      }
    ]
  }

]

export const routeOther = []
