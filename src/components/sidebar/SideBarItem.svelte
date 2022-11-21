<script>
    // props
    export let isActive = false;
    export let href= "";
    // end props

    let className = "flex gap-4 rounded-md";
    if(isActive) {
        className += " active";
    }
</script>

<li>
    <a href={href} class={className}><slot></slot></a> 
</li>