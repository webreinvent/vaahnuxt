import globalComponents from "../../../../ui/helpers/globalComponents";
import SideMenu from "../../partials/SideMenu";

import Upload from '../../../../ui/buefy/components/FormControl/Upload/Upload'
import UploadCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Upload/Upload";

import DragAndDrop from '../../../../ui/buefy/components/FormControl/Upload/DragAndDrop'
import DragAndDropCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Upload/DragAndDrop";

export default {
  layout: 'ui',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    UploadCode() {return UploadCode},
    DragAndDropCode() {return DragAndDropCode},
  },
  components: {
    ...globalComponents,
    SideMenu,
    Upload,
    DragAndDrop,

  },
  methods:{

  },

}
