//your JS code here. If required.
let changeColor = document.getElementById('change_button');

changeColor.addEventListener('click', ()=>{
	const blockId = document.getElementById('block_id').value;
	const colorId = document.getElementById('colour_id').value;
	
	for (let i = 1; i <= 9; i++) {
		const gridItem = document.getElementById(i.toString());
		
		if (gridItem && gridItem.id == blockId) {
			gridItem.style.backgroundColor = colorId;
		}else{
			gridItem.style.backgroundColor = 'transparent'
		}
	}
});

let resetColor = document.getElementById('reset_button');
resetColor.addEventListener('click', (event) => {
 event.preventDefault();
	
	for (let i = 1; i <= 9; i++) {
		const gridItems = document.getElementById(i.toString());
		gridItems.style.backgroundColor = 'transparent';
	}
});