<template>
    <div>
         <filmheader></filmheader>
           <router-view></router-view>
    </div>
</template>
<script>
import filmheader from "@/components/Navigation/filmheader";
export default {
    components: {
         filmheader
    }
}
</script>