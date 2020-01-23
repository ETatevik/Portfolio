const menu_btn     		 	 = document.querySelector('.open-menu-bar');
const menu        		 	 = document.querySelector('#eTmenu');
const portfolio_elements 	 = document.querySelectorAll('.portfolio-content .row');
const more                   = document.querySelector('#moreProjects'); 
let index_elem               = 0;    
const loading                = document.querySelector('#eTloading');

window.onload = function(){
	loading.classList.add('hide');

	setTimeout(function(){
		loading.style.display = 'none';
	}, 3002);
}


menu_btn.addEventListener('click', showMenu);
menu.addEventListener('click', closeMenu);
more.addEventListener('click', addMoreProjects);

function showMenu(e){
	menu.className = menu.classList == 'show' ? '' : 'show';
}

function closeMenu(e){
	if (e.target.tagName.toLowerCase() == 'a' ) {
		menu.className = '';
	}
}

function addMoreProjects(e){
	index_elem++;

	if(index_elem == portfolio_elements.length) return false; 

	if(index_elem == portfolio_elements.length - 1){
		this.style.display = 'none';
	}
	portfolio_elements[index_elem].classList.add('show');
}