/**
 * Created by Administrator on 2017-08-16.
 */
$(function(){
    $('#menu').on('click','.menu_item:nth-child(8)', function () {
        $('#menu .menu_item:nth-last-child(-n+4)').toggle();
    });
    menuProduct();
    discountProduct();
});
function menuProduct(){
    $.ajax({
       url:'http://182.254.146.100:3000/api/getindexmenu',
        success: function (data) {
            console.log(data);
            var html=template('menu_product',data);
            $('#menu').html(html);
        }
    });
}

function discountProduct(){
    $.ajax({
       url:'http://182.254.146.100:3000/api/getmoneyctrl',
        success:function(data){
            var html=template('discount_product',data);
            $('.discount_product').html(html);
        }
    });
}