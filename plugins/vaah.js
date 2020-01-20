import Vue from 'vue'

import {ToastProgrammatic as Toast} from "buefy";
import {DialogProgrammatic as Dialog} from "buefy";
import {LoadingProgrammatic as Loading} from "buefy";
import {ModalProgrammatic as Modal} from "buefy";
import {SnackbarProgrammatic as Snackbar} from "buefy";
import {NotificationProgrammatic as Notification} from "buefy";


const VaahHelper = {
  options: {},
  //---------------------------------------------------------------------
  //---------------------------------------------------------------------
  setOptions (options) {
    this.options = options;
    return this
  },
  //---------------------------------------------------------------------

  //---------------------------------------------------------------------
  async ajax(url, params, callback, query )
  {

    let q = {
      params: query
    };

    let data = await Vue.axios.post(url, params, q)
      .then(response => {



        if(response.data.status)
        {
          if(response.data.status == 'failed')
          {
            if(response.data.messages)
            {
              this.toastErrors(response.data.messages);
            }


          }
          if(response.data.status == 'success')
          {
            if(response.data.messages)
            {
              this.toastSuccess(response.data.messages);
            }
          }

        }

        if(response.data && response.data.data)
        {
          callback(response.data.data, response);
        } else
        {
          callback(false, response);
        }

        return response;

      })
      .catch(error => {

        console.log('--->error', error);

        if(debug == true)
        {
          this.toastErrors([error]);
        } else
        {
          this.toastErrors(['Something went wrong']);
        }

        callback(false, error);

        return error;
      });

    return data;


  },
  //---------------------------------------------------------------------
  updateRootState: function(state_name, state_value)
  {
    let payload = {
      'key': state_name,
      'value': state_value,
    };
    store.commit('root/updateState', payload)
  },
  //---------------------------------------------------------------------
  confirmCopiedData: function(data)
  {
    Toast.open({
      message: 'Copied',
      type: 'is-success'
    });
  },
  //---------------------------------------------------------------------
  toastSuccess(messages){
    messages.forEach(function (message) {
      Toast.open({
        message: message,
        type: 'is-success'
      });
    });
  },
  //-----------------------------------------------------------------
  toastErrors(messages){
    messages.forEach(function (error) {
      Toast.open({
        message: error,
        type: 'is-danger'
      });
    });
  },
  //---------------------------------------------------------------------
  ucfirst: function (s) {

    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)

  },
  //---------------------------------------------------------------------
  getPageName: function (fullPath) {
    return fullPath.substring(fullPath.lastIndexOf('/')+1);
  }
  //---------------------------------------------------------------------

  //---------------------------------------------------------------------

  //---------------------------------------------------------------------


};


Vue.prototype.$vaah = VaahHelper;
