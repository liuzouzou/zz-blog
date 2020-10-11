import request from '@/utils/request'

export default{
    // 分页条件查询列表,query为查询的参数值，...query解耦
    getList(query,currentPage=1,size=10){
        return request({
            url: `/article/category/search`,
            method: 'post',
            data: {
                ...query,
                currentPage,
                size
            }
        })

    },

    // 新增数据
    add(data){ 
        return request({
            url: `/article/category`,
            method: 'post',
            data: data
            

            })
        },
    
    //编辑数据
    update(data){ 
        return request({
            url: `/article/category`,
            method: 'put',
            data
            

            })
        },
    
     // 删除数据
     deleteById(id){ 
        return request({
            url: `/article/category/${id}`,
            method: 'delete',

            })
        },
    }