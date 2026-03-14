<script>
    let selected = '';
    let isOpen = false;

    const options = [
        {value: 'option1', description: 'Description for option 4'},
        {value: 'option2', description: 'Description for option 4'},
        {value: 'option3', description: 'Description for option 4'},
        {value: 'option4', description: 'Description for option 4'}
    ];

    function handleSelect(option){
        selected = option.value;
    }
</script>

<div
    class="dropdown"
    on:mouseenter={() => isOpen = true}
    on:mouseleave={() => isOpen = false}
>
    <button class="dropbtn">{selected || 'Select an option'}</button>
    <div class="dropdown-content" class:open={isOpen}>
        {#each options as option}
        <a on:click={() => handleSelect(option)}>
            <strong>{option.value}</strong> - {option.description}
        </a>
        {/each}
    </div>
</div>

<style>
    .dropdown {
        position: relative;
        display: inline-block;
    }
    .dropbtn {
        background-color: #4CAF50;
        color: white;
        padding: 16px;
        font-size: 16px;
        border: none;
        cursor: pointer;
    }
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }
    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }
    .dropdown-content.open {
        display: block;
    }
</style>