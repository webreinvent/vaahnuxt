import SectionTitle from '../../../ui/resuable/SectionTitle'
import SectionCode from '../../../ui/resuable/SectionCode'

import Table from '../../../ui/buefy/components/Table/Table'
import TableCode from "!raw-loader!../../../ui/buefy/components/Table/Table";

import SandboxWithCustomTemplate from '../../../ui/buefy/components/Table/SandboxWithCustomTemplate'
import SandboxWithCustomTemplateCode from "!raw-loader!../../../ui/buefy/components/Table/SandboxWithCustomTemplate";

import Selection from '../../../ui/buefy/components/Table/Selection'
import SelectionCode from "!raw-loader!../../../ui/buefy/components/Table/Selection";

import Checkable from '../../../ui/buefy/components/Table/Checkable'
import CheckableCode from "!raw-loader!../../../ui/buefy/components/Table/Checkable";

import Searchable from '../../../ui/buefy/components/Table/Searchable'
import SearchableCode from "!raw-loader!../../../ui/buefy/components/Table/Searchable";

import PaginationAndSorting from '../../../ui/buefy/components/Table/PaginationAndSorting'
import PaginationAndSortingCode from "!raw-loader!../../../ui/buefy/components/Table/PaginationAndSorting";

import DetailedRows from '../../../ui/buefy/components/Table/DetailedRows'
import DetailedRowsCode from "!raw-loader!../../../ui/buefy/components/Table/DetailedRows";

import CustomDetailedRows from '../../../ui/buefy/components/Table/CustomDetailedRows'
import CustomDetailedRowsCode from "!raw-loader!../../../ui/buefy/components/Table/CustomDetailedRows";

import RowStatus from '../../../ui/buefy/components/Table/RowStatus'
import RowStatusCode from "!raw-loader!../../../ui/buefy/components/Table/RowStatus";

import CustomHeaders from '../../../ui/buefy/components/Table/CustomHeaders'
import CustomHeadersCode from "!raw-loader!../../../ui/buefy/components/Table/CustomHeaders";

import Subheadings from '../../../ui/buefy/components/Table/Subheadings'
import SubheadingsCode from "!raw-loader!../../../ui/buefy/components/Table/Subheadings";

import ToggleColumns from '../../../ui/buefy/components/Table/ToggleColumns'
import ToggleColumnsCode from "!raw-loader!../../../ui/buefy/components/Table/ToggleColumns";

import Footer from '../../../ui/buefy/components/Table/Footer'
import FooterCode from "!raw-loader!../../../ui/buefy/components/Table/Footer";

import AsyncData from '../../../ui/buefy/components/Table/AsyncData'
import AsyncDataCode from "!raw-loader!../../../ui/buefy/components/Table/AsyncData";

import DraggableRows from '../../../ui/buefy/components/Table/DraggableRows'
import DraggableRowsCode from "!raw-loader!../../../ui/buefy/components/Table/DraggableRows";

export default {
  layout: 'ui/buefy',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    TableCode() {return TableCode},
    SandboxWithCustomTemplateCode() {return SandboxWithCustomTemplateCode},
    SelectionCode() {return SelectionCode},
    CheckableCode() {return CheckableCode},
    SearchableCode() {return SearchableCode},
    PaginationAndSortingCode() {return PaginationAndSortingCode},
    DetailedRowsCode() {return DetailedRowsCode},
    CustomDetailedRowsCode() {return CustomDetailedRowsCode},
    RowStatusCode() {return RowStatusCode},
    CustomHeadersCode() {return CustomHeadersCode},
    SubheadingsCode() {return SubheadingsCode},
    ToggleColumnsCode() {return ToggleColumnsCode},
    FooterCode() {return FooterCode},
    AsyncDataCode() {return AsyncDataCode},
    DraggableRowsCode() {return DraggableRowsCode},

  },
  components: {
    SectionTitle,
    SectionCode,
    Table,
    SandboxWithCustomTemplate,
    Selection,
    Checkable,
    Searchable,
    PaginationAndSorting,
    DetailedRows,
    CustomDetailedRows,
    RowStatus,
    CustomHeaders,
    Subheadings,
    ToggleColumns,
    Footer,
    AsyncData,
    DraggableRows,

  },
  methods:{

  },

}
