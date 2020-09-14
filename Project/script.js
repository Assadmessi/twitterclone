// DOM Elements
const mianPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const middleContent = document.querySelector('.middle-content');
const btnTop = document.querySelector('.btn-top');
const newsFeedPage = document.querySelector('.feeds-page');
const loginModal = document.querySelector('.login-modal');
const modalX = document.querySelector('.login-modal i');
const loginFormBtn =document.querySelector('.login-form-btn');
const postBtn = document.querySelector('.post-btn');
const modalWarpper = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const postModalX = document.querySelector('.modal-header  i');
/******************************************************/
/******************************************************/

 // mian page
 const goToLoingPage = () => {
 	mianPage.style.display = 'none';
 	loginPage.style.display = 'grid';
 };



middleContent.addEventListener('click', (e) => 
{
	if (e.target.classList[1] === 'main-btn')
	 {
	 	goToLoingPage();
	 }
});

btnTop.addEventListener('click', () => 
{
	const inputUserInfo = document.querySelector('.user-info');
	const inputPassword = document.querySelector('.password');

	if(inputUserInfo.value !== "" && inputPassword.value !==""){
		mianPage.style.display = 'none';
		newsFeedPage.style.display = 'block';
	} else {
		goToLoingPage();
		loginModal.style.display = 'block';
	}
});

// Login page
modalX.addEventListener('click', () => 
{
	loginModal.style.display = 'none';
});

loginFormBtn.addEventListener('click', () => 
{
	const loginUserInfo = document.querySelector('.login-user-info');
	const loginPassword = document.querySelector('.login-password');

	if (loginUserInfo.value !== "" && loginPassword.value !== "") 
	{
		loginPage.style.display = 'none';
		newsFeedPage.style.display = 'block';
	} else {
		loginModal.style.display = 'block';
	}
});

// News feed page
// Post modal
postBtn.addEventListener('click', () => 
{
	modal.style.display = 'block';
	modalWarpper.classList.add('modal-wrapper-display');
});

postModalX.addEventListener()