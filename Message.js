function notifyMess({tittle="",message="",type,duration=3000} ) {
    let value=document.getElementById('notify')
    if(value){
        let newNotify= document.createElement('div')
        newNotify.onclick=function (e) {
            if(e.target.closest('.message__close')){
                value.removeChild(newNotify)
            }
        }
        let icons={
            notification: "fa fa-bell",
            read: " fa fa-book",
            delete: "fa fa-trash"
        }
        if(type==="notification"){
            let a=[
                "Anh duybe nhìn gay quá !!!",
                "Nhìn em hạnh phúc bên ai càng làm anh tan nát lòng :(",
                "Tự dưng thấy nhớ ems",
                "Tôi là trai Hoa Thánh"
            ]
            newNotify.onclick=function (e){
                notifyMess({
                    title: "Message",
                    message:a[Math.floor(Math.random() * 4)],
                    type:"read",
                    duration:3000
                })
                value.removeChild(newNotify)
            }
        }
        newNotify.classList.add("notify" ,`${type}`)
        newNotify.innerHTML=`
        <div class="message__icon">
            <i class="${icons[type]}"  aria-hidden="true"></i>
        </div>
        <div class="message__body">
            <p class="message__msg">${message}</p>
        </div>
        <div  class="message__close">
            <i class="fa fa-times" aria-hidden="true"></i>
        </div>`
        value.appendChild(newNotify)
        setTimeout(function () {
            value.removeChild(newNotify)
        },duration+1000)
    }
}

function showNoti(){
    let name=[
        "DoChuong",
        "NguyenDuy",
        "AnhThang",
        "Em be đi Thái"
    ]
    notifyMess({
        title: "Notification",
        message:`You have a new message from ${name[Math.floor(Math.random() * 4)]}`,
        type:"notification",
        duration:3000
    })
}
function showRead() {
    let a=[
        "Anh duybe nhìn gay quá !!!",
        "Nhìn em hạnh phúc bên ai càng làm anh tan nát lòng :(",
        "Tự dưng thấy nhớ ems",
        "Tôi là trai Hoa Thánh"
    ]
    notifyMess({
        title: "Message",
        message:a[Math.floor(Math.random() * 4)],
        type:"read",
        duration:3000
    })
}
function showDelete() {
    notifyMess({
        title: "Delete",
        message:"You deleted DoChuong conversation !",
        type:"delete",
        duration:3000
    })
}