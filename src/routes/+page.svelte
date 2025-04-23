<script>
    import {HeroSection, SectionHeadline, AboutMeSection} from "$components";
    const {data} =$props();
    let {workExperience}=data;
</script>

<HeroSection/>
<AboutMeSection  {workExperience}/>