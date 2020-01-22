let menu_btn     		 = document.querySelector('.open-menu-bar');
let menu        		 = document.querySelector('#eTmenu');
let portfolio_elements 	 = document.querySelectorAll('.portfolio-content .row');
let more                 = document.querySelector('#moreProjects'); 
let index_elem           = 0;    

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