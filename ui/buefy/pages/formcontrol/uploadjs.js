import SectionTitle from '../../../../ui/resuable/SectionTitle'
import SectionCode from '../../../../ui/resuable/SectionCode'

import Upload from '../../../../ui/buefy/components/FormControl/Upload/Upload'
import UploadCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Upload/Upload";

import DragAndDrop from '../../../../ui/buefy/components/FormControl/Upload/DragAndDrop'
import DragAndDropCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Upload/DragAndDrop";

export default {
  layout: 'ui/buefy',
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
    SectionTitle,
    SectionCode,
    Upload,
    DragAndDrop,

  },
  methods:{

  },

}
