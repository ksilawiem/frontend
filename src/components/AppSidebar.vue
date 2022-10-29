<!-- <template>
 <CSidebar class="sidebar" position="fixed" :unfoldable="sidebarUnfoldable" :visible="sidebarVisible" @visible-change="
    (event) =>
      $store.commit({
        type: 'updateSidebarVisible',
        value: event,
      })
  ">
    <CSidebarBrand>
      <img class="e" src="../assets/images/e1.png">
      <p class="p"><i>JobSeeker</i></p>
    </CSidebarBrand>
    <AppSidebarNav />
  </CSidebar>
</template>
!-->
<!-- <script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { AppSidebarNav } from './AppSidebarNav'
import { logoNegative } from '@/assets/brand/logo-negative'
import { sygnet } from '@/assets/brand/sygnet'
export default {
  name: 'AppSidebar',
  components: {
    AppSidebarNav,
  },
  setup() {
    const store = useStore()
    return {
      logoNegative,
      sygnet,
      sidebarUnfoldable: computed(() => store.state.sidebarUnfoldable),
      sidebarVisible: computed(() => store.state.sidebarVisible),
    }
  },
}
</script>
<style>
.p {
  font-size: 22px;
  color: rgb(95, 153, 219);
}



.e {
  height: 35px;
  width: 35px;
}
</style> 
!-->