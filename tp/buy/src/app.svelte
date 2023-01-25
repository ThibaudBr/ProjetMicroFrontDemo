<script>
    import ticket from 'home/ticket';
    import displayTicket from 'displayTicket/displayTicket';

    let image = displayTicket.image;
    displayTicket.subscribe(() => {
        image = displayTicket.image;
    });
    const addToCart = () => {
        displayTicket.incrementCount();
    };
</script>
<div class="mui-panel">
    <div style="text-align: center;">
        <img src={ticket[image].image} style="max-height: 200px;" />
    </div>
    <button
            on:click={addToCart}
            class="mui-btn mui-btn--primary"
            style="width: 100%;"
    >
        Add To Cart
    </button>
</div>
