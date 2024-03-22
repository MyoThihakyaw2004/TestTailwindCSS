const mybutton=document.querySelector('#mybutton')
const mymenu=document.querySelector('#mymenu')
const menucontainer=document.querySelector('#menucontainer')
mybutton.onclick=function(event){
    event.preventDefault()
    console.log('Button clicked!');
    if(mymenu.classList.contains('hidden')){
        mymenu.classList.remove( 'hidden' )
        mymenu.classList.add('bg-teal-500')
        mymenu.classList.add('text-gray-900')
        mymenu.classList.add('mt-5')
        menucontainer.classList.add('relative')
        mymenu.classList.add('absolute')
        mymenu.classList.add('top-5')
        mymenu.classList.add('left-0')
        mymenu.classList.add('w-full')

    }
    else{
        mymenu.classList.add( 'hidden' );
    }

}