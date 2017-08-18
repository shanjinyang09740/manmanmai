/**
 * Created by Administrator on 2017-08-17.
 */
$(function(){
    $('#category').on('click','.category_product>li>a',function(){
       $(this).parent().find('ul').toggle();
        $(this).parent().siblings().find('ul').slideUp();

        var $that=$(this);
        var titleId=$(this).attr('data-title-id');

        categoryContent($that,titleId);
    });


    categoryMenu();

});

function categoryMenu(){
    $.ajax({
       url:'http://182.254.146.100:3000/api/getcategorytitle',
        success: function (data) {
            var html=template('category_menu',data);
            $('.category_product').html(html);
        }
    });
}

function categoryContent($that,titleId){
    $.ajax({
       url:'http://182.254.146.100:3000/api/getcategory?titleid='+titleId,
        success:function(data){
            var html=template('category_content',data);
            $that.siblings('ul').html(html);
        }
    });
}