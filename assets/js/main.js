const sidebarTrigger = document.querySelector('.sidebar-arrow')
let sidebarIsOpen = false
const sidebar = document.querySelector('.sidebar')
const profileInfo = document.querySelector('.profile-info-wrapper')
const functionalityLinks = document.querySelectorAll('.doc-title')

const burgerBar = document.querySelector('.burger-bar')
let burgerIsDown = false


// dwopdown
const dwopdownBunntons = document.querySelectorAll('.responsive-dropdown-btn')
const notificationWrapper = document.querySelectorAll('.notification-item')
let droppedDown = false

dwopdownBunntons.forEach((dropdownBtn, dropdownIndex) => {
    dropdownBtn.onclick = () => {
        notificationWrapper.forEach((item, itemIndex) => {
            if(dropdownIndex === itemIndex){
                if(!droppedDown){
                    item.style.height = '288px'
                    droppedDown = true
                return
                }
                droppedDown = false
                item.style.height = '48px'
            }
            
        })
        console.log(droppedDown);
    }
 
})




sidebarTrigger.onclick = function openCloseSidebar(e) {
    if(!sidebarIsOpen){
        sidebarTrigger.style.transform = 'rotate(0deg)'
        sidebarTrigger.style.left = '104px'
        sidebar.style.width = '120px'
        profileInfo.classList.toggle('hide')
        functionalityLinks.forEach(item => item.classList.toggle('hide'))
        sidebarIsOpen = true
        return
    }
        sidebarTrigger.style.transform = 'rotate(180deg)'
        sidebarTrigger.style.left = '312px'
        sidebar.style.width = '328px'
        setTimeout(() => {
            profileInfo.classList.toggle('hide')
            functionalityLinks.forEach(item => item.classList.toggle('hide'))
        }, 200)
        sidebarIsOpen = false
}   

burgerBar.onclick = function openBurger(){
    if(!burgerIsDown){
        sidebar.style.alignItems = 'flex-start'
        sidebar.style.paddingBottom = '500px'
        burgerIsDown = !burgerIsDown
        return
    }
    sidebar.style.alignItems = 'center'
    sidebar.style.paddingBottom = '0px'
        burgerIsDown = !burgerIsDown
}