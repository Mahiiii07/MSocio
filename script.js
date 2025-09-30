
// --------------- Preloader ---------------

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 5000);
});



// --------------- Sidebar ---------------

const menuItems = document.querySelectorAll('.menu-item');

//  for messages
const messagesNotification  = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// For theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');


// --------------- remove active class from all menu items ---------------
const changeActiveItem = () =>{
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}


menuItems.forEach(item =>{
    item.addEventListener('click',() =>{
        changeActiveItem();
        item.classList.add('active');

        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').  style.display = 'none';
        } else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})


// --------------- Messages ---------------

// highlight message card when clicked
messagesNotification.addEventListener('click', () =>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() =>{
        messages.style.boxShadow = 'none';
    },2000)
})


// search chats 
const searchMessage = () => {
    const val = messageSearch.value.toUpperCase();
    console.log(val);
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toUpperCase(); 
       
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }else{
            chat.style.display = 'none';
        }
    })
}

messageSearch.addEventListener('keyup', searchMessage);


// --------------- THEME CUSTOMIZATION -----------------


// opens modal
const openThemeModal = () =>{
    themeModal.style.display = 'grid';
}

theme.addEventListener('click' , openThemeModal);


// close modal

const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) { 
        themeModal.style.display = 'none';
    }
};
themeModal.addEventListener('click', closeThemeModal);


// --------------- Fonts size -----------------

// remove active class from span or font size selectors
const removeSizeSelector = () =>{
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}


fontSizes.forEach(size =>{
    
    size.addEventListener('click', () => {
    
        removeSizeSelector();
        size.classList.toggle('active');
        let fontSize;

        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        }else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        }else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        }else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        }else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-10rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        }
        // change font size of the root html element
    document.querySelector('html').style.fontSize = fontSize;
    })
          
})


// --------------- Fonts Color -----------------

// remove active class from colors
const changeActiveColorClass = () =>{
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}


// change primary color
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        
        changeActiveColorClass();
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }

        color.classList.add('active');
        
        root.style.setProperty('--primary-color-hue' , primaryHue);
    })
})

// --------------- Background Color -----------------
let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;

// change Background color
const changeBG = () =>{
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
}

Bg1.addEventListener('click', () =>{
    darkColorLightness = '17%';
    whiteColorLightness = '95%';
    lightColorLightness = '100%';

    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})

Bg2.addEventListener('click', () =>{
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})

Bg3.addEventListener('click', () =>{
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    Bg3.classList.add('active');
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})

// --------------- heart color changes to red on click ---------------
const likeButtons = document.querySelectorAll('.like-button');

likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('liked');
        const heartIcon = button.querySelector('i');
        if (button.classList.contains('liked')) {
            heartIcon.classList.remove('fa-regular');
            heartIcon.classList.add('fa-solid'); // Full red heart icon
        } else {
            heartIcon.classList.remove('fa-solid');
            heartIcon.classList.add('fa-regular'); // Regular heart icon
        }
    });
});


// --------------- for bookmark ---------------
const bookMarkButtons = document.querySelectorAll('.bookmark');

bookMarkButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('liked');
        const heartIcon = button.querySelector('i');
        if (button.classList.contains('liked')) {
            heartIcon.classList.remove('fa-regular');
            heartIcon.classList.add('fa-solid'); // Full red heart icon
        } else {
            heartIcon.classList.remove('fa-solid');
            heartIcon.classList.add('fa-regular'); // Regular heart icon
        }
    });
});


// --------------- To Change Profile Picture ---------------

document.querySelectorAll('#my-profile-picture').forEach(AllProfile => {
    AllProfile.addEventListener('click' , () => {
        document.querySelector('.profile-popup').style.display = 'flex'
   })
})

document.querySelectorAll('.close').forEach(AllClose => {
    AllClose.addEventListener('click', () => {
        document.querySelector('.profile-popup').style.display = 'none'
        document.querySelector('.add-post-popup').style.display = 'none'
    })
})

document.querySelector('#profile-upload').addEventListener('change' , () => {
    document.querySelectorAll('#my-profile-picture img').forEach(AllProfileImg => {
        AllProfileImg.src = URL.createObjectURL(document.querySelector('#profile-upload').files[0])
    })
})


//  On Window scroll Profile Picture popup disappears

window.addEventListener('scroll', () => {
    document.querySelector('.profile-popup').style.display = 'none'
    document.querySelector('.add-post-popup').style.display = 'none'
})


// --------------- To Add a Post popup ---------------
document.querySelector('#create-post').addEventListener('click', () => {
    document.querySelector('.add-post-popup').style.display = 'flex'
})

document.querySelector('#feed-pic-upload').addEventListener('change', () => {
    document.querySelector('#post-image').src = URL.createObjectURL(document.querySelector('#feed-pic-upload').files[0])
})


// --------------- Story Change ---------------
document.querySelector('#add-story').addEventListener('change' , () => {
    document.querySelector('.story img').src = URL.createObjectURL(document.querySelector('#add-story').files[0]);
    document.querySelector('.add-story').style.display = 'none'; 
})


// --------------- Friend Request ---------------

let Accept = document.querySelectorAll('#Accept');
let Delete = document.querySelectorAll('#Delete');
let action = document.querySelectorAll('.action');
let request = document.querySelectorAll('.request')

Accept.forEach(accept => {
    accept.addEventListener('click', () => {
        accept.parentElement.style.display = 'none'
        accept.parentElement.parentElement.querySelector('.alert').style.display = 'block'
    })
})

Delete.forEach(delete_request => {
    delete_request.addEventListener('click', () => {
        delete_request.parentElement.parentElement.style.display = 'none'
    })
})