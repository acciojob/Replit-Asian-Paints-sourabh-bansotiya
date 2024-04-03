//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const gridItems = document.querySelectorAll('.grid-item');
    const blockIdInput = document.getElementById('block_id');
    const colorIdInput = document.getElementById('colour_id');
    const changeButton = document.getElementById('change_button');
    const resetButton = document.getElementById('reset_button');
 
    // Function to change the color of a specific grid item
    function changeColor(blockId, color) {
        const targetBlock = document.getElementById(blockId);
        if (targetBlock) {
            targetBlock.style.backgroundColor = color;
        }
    }
 
    // Function to reset all grid item colors to transparent
    function resetGrid() {
        gridItems.forEach(item => {
            item.style.backgroundColor = 'transparent';
        });
    }
 
    // Event listener for the Change Color button
    changeButton.addEventListener('click', function () {
        const blockId = blockIdInput.value;
        const color = colorIdInput.value;
        changeColor(blockId, color);
        // Reset the input fields
        blockIdInput.value = '';
        colorIdInput.value = '';
    });
 
    // Event listener for the Reset button
    resetButton.addEventListener('click', function () {
        resetGrid();
    });
});