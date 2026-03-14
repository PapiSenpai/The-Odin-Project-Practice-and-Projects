<script>
    import { slide, fade } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';


    const items = ['HTML', 'CSS', 'JavaScript', 'Svelte'];
    let selected = {};

    $: activeItems = items.filter(item => selected[item]);
</script>

<div class="controls">
    {#each items as item}
    <label>
        <input type="checkbox" bind:checked={selected[item]} />
        {item}
    </label>
    {/each}
</div>

<div class="table-wrap">
    <table>
    <thead>
        <tr>
            <th>Skill</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        {#each activeItems as skill (skill)}
        <tr in:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'x'}} out:fade={{ duration: 120 }}>
            <td>{skill}</td>
            <td>Added</td>
        </tr>
        {/each}
    </tbody>
    </table>
</div>

<style>
    .controls {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem 1rem;
        margin-bottom: 1rem;
    }

    .table-wrap {
        width: 100%;
        overflow-x: auto;
        border: 1px solid #ddd;
        border-radius: 8px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        min-width: 420px;
    }

    th, td {
        padding: 0.75rem;
        border-bottom: 1px solid #eee;
        text-align: left;
    }

    @media (max-width: 600px) {
        th, td { padding: 0.6rem; font-size: 0.92rem; }
    }
</style>