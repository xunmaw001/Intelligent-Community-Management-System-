const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"安保维护类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryAnbaoweihu"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"社区车位类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryChewei"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"帖子类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryForum"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"公告类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryGonggao"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"公共场所类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryGonggongchangsuo"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"新闻类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryNews"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"社区活动类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryShequhuodong"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"时间段管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryShijianduan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"政务服务类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryZhengwufuwu"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"安保维护管理",
                        "menuJump":"列表",
                        "tableName":"anbaoweihu"
                    }
                ],
                "menu":"安保维护管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"社区车位管理",
                        "menuJump":"列表",
                        "tableName":"chewei"
                    }
                ],
                "menu":"社区车位管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"论坛管理",
                        "menuJump":"列表",
                        "tableName":"forum"
                    }
                ],
                "menu":"论坛管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公共场所管理",
                        "menuJump":"列表",
                        "tableName":"gonggongchangsuo"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"公共场所留言管理",
                        "menuJump":"列表",
                        "tableName":"gonggongchangsuoLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"公共场所收藏管理",
                        "menuJump":"列表",
                        "tableName":"gonggongchangsuoCollection"
                    }
                    ,
                    {
                        "buttons":[
                            "订单",
                            "审核",
                            "查看",
                            "删除"
                        ],
                        "menu":"公共场所预约管理",
                        "menuJump":"列表",
                        "tableName":"gonggongchangsuoOrder"
                    }
                ],
                "menu":"公共场所管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"留言板管理",
                        "menuJump":"列表",
                        "tableName":"liuyan"
                    }
                ],
                "menu":"留言板管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"新闻信息管理",
                        "menuJump":"列表",
                        "tableName":"news"
                    }
                ],
                "menu":"新闻信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"社区活动管理",
                        "menuJump":"列表",
                        "tableName":"shequhuodong"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"社区活动留言管理",
                        "menuJump":"列表",
                        "tableName":"shequhuodongLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"社区活动收藏管理",
                        "menuJump":"列表",
                        "tableName":"shequhuodongCollection"
                    }
                    ,
                    {
                        "buttons":[
                            "订单",
                            "审核",
                            "查看",
                            "删除"
                        ],
                        "menu":"社区活动预约管理",
                        "menuJump":"列表",
                        "tableName":"shequhuodongOrder"
                    }
                ],
                "menu":"社区活动管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"政务服务管理",
                        "menuJump":"列表",
                        "tableName":"zhengwufuwu"
                    }
                ],
                "menu":"政务服务管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"安保维护管理",
                        "menuJump":"列表",
                        "tableName":"anbaoweihu"
                    }
                ],
                "menu":"安保维护管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"社区车位管理",
                        "menuJump":"列表",
                        "tableName":"chewei"
                    }
                ],
                "menu":"社区车位管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"论坛管理",
                        "menuJump":"列表",
                        "tableName":"forum"
                    }
                ],
                "menu":"论坛管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"公告管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"公共场所管理",
                        "menuJump":"列表",
                        "tableName":"gonggongchangsuo"
                    }
                    ,
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"公共场所留言管理",
                        "menuJump":"列表",
                        "tableName":"gonggongchangsuoLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"公共场所收藏管理",
                        "menuJump":"列表",
                        "tableName":"gonggongchangsuoCollection"
                    }
                    ,
                    {
                        "buttons":[
                            "订单",
                            "查看"
                        ],
                        "menu":"公共场所预约管理",
                        "menuJump":"列表",
                        "tableName":"gonggongchangsuoOrder"
                    }
                ],
                "menu":"公共场所管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"留言板管理",
                        "menuJump":"列表",
                        "tableName":"liuyan"
                    }
                ],
                "menu":"留言板管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"新闻信息管理",
                        "menuJump":"列表",
                        "tableName":"news"
                    }
                ],
                "menu":"新闻信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"社区活动管理",
                        "menuJump":"列表",
                        "tableName":"shequhuodong"
                    }
                    ,
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"社区活动留言管理",
                        "menuJump":"列表",
                        "tableName":"shequhuodongLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"社区活动收藏管理",
                        "menuJump":"列表",
                        "tableName":"shequhuodongCollection"
                    }
                    ,
                    {
                        "buttons":[
                            "订单",
                            "查看"
                        ],
                        "menu":"社区活动预约管理",
                        "menuJump":"列表",
                        "tableName":"shequhuodongOrder"
                    }
                ],
                "menu":"社区活动管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"政务服务管理",
                        "menuJump":"列表",
                        "tableName":"zhengwufuwu"
                    }
                ],
                "menu":"政务服务管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"用户",
        "tableName":"yonghu"
    }
]
    }
}
export default menu;
