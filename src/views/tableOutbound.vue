<template>
  <main class="pl-4">
    <v-data-table
      :headers="headers"
      :items="show"
      
      :loading="myloadingvariable"
      loading-text="ກຳລັງໂຫຼດ... ກະລຸນາລໍຖ້າ"
      class="elevation-1 font pl-2"
    >
 
   

      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>ຂາອອກສຳນັກງານ</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
         
        </v-toolbar>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <router-link
          :to="{
            path: '/show/' + item.doc_Id + '/editdoc',
            params: { doc_Id },
          }"
          ><v-icon small class="mr-2"> mdi-pencil </v-icon></router-link
        >

        <v-icon
          small
          color="error"
          class="mr-2"
          @click="DeleteShow(item.doc_Id)"
        >
          mdi-delete
        </v-icon>
        <v-icon
          small
          class="mr-2"
          type="button"
          value="Open"
          @click="readFile()"
        >
          fa-duotone fa-book</v-icon
        >
      </template>
    </v-data-table>
  </main>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import axios from "axios";

export default {
 



  data: () => ({
    myloadingvariable: true,
    headers: [
      
      { text: "ເລກທີເອກະສານຂາອອກ", value: "doc_Id" },
      { text: "ເລກທີສະໂນດ", value: "outbound_Detail_Id " },
      { text: "ຜູ້ບັນທຶກເອກະສານ", value: "user_Id " },
      { text: "ເລື່ອງ", value: "title" },
      { text: "ວັນ,ເດືອນ,ປີ", value: "date" },
      { text: "ມາຈາກ", value: "from" },
      { text: "ຈຳນວນ", value: "doc_quantity" },
      { text: "ໝວດເອກະສານ", value: "doc_Category_Id " },
      { text: "ເລກທີເອກະສານ", value: "doc_C_Id" },
      { text: "ຈຸດປະສົງ", value: "doc_purpose" },
      { text: "Actions", value: "actions", sortable: false },
    ],
  
    show: [
      {No: '1',}
  
    ],
    No:'',
    doc_Id: "",
    outbound_Detail_Id: "",
    doc_Category_Id: null,
    user_Id: "",
    title: "",
    doc_C_Id: "",
    date: "",
    from: "",
    doc_quantity: "",
    doc_purpose: "",

    docs_Category_Id: [],

    dialog: false,
    dialogDelete: false,
  }),
  

  mounted() {
    this.fetchData();
    setInterval(() => this.fetchData(), 3000);
   
  },

  methods: {

    DeleteShow(outbound_Detail_Id) {
      axios
        .delete(`http://127.0.0.1:8000/api/outbound_detail/delete/${outbound_Detail_Id}`)
        .then((res) => {
          alert(res.data.message);
        });
    },
    async fetchData() {
      axios
        .get("http://127.0.0.1:8000/api/doc_outbound/all")
        .then((response) => {
          this.show = response.data.data;
          this.myloadingvariable = false;
          console.log(response.data.data);
        });
    },

    

 
  },
};
</script>

<style scoped lang="css"></style>
