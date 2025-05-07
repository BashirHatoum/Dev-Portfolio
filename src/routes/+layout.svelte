<script>
	import { Header } from "$components";
	import Footer from "$components/Footer.svelte";
    import "../app.css";

    let {children} = $props();
</script>
<Header />
{@render children()}
<Footer/>