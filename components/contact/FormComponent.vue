<template>
  <div class="login-box">
    <form @submit.prevent="handleSubmit" id="contact_form">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
          <div class="user-box">
            <input type="text" v-model="user.name" id="name" name="name" required="" @blur="$v.user.name.$touch()">
            <label>{{ $t('name') }}</label>
            <!-- Error name -->
            <span v-if="$v.user.name.$error" class="error-text">* {{ $t('field_is_mandatory') }}</span>
          </div>
        </div>

        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
          <div class="user-box">
            <input type="text" v-model="user.surname" id="surname" name="surname" required=""
              @blur="$v.user.surname.$touch()">
            <label>{{ $t('surname') }}</label>
            <!-- Error surname -->
            <span v-if="$v.user.surname.$error" class="error-text">* {{ $t('field_is_mandatory') }}</span>
          </div>
        </div>

        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
          <div class="user-box">
            <input type="tel" v-model="user.telephone" id="telephone" name="telephone" required=""
              @blur="$v.user.telephone.$touch()">
            <label>{{ $t('phone') }}</label>
            <!-- Error phone -->
            <span v-if="$v.user.telephone.$error" class="error-text">* {{ $t('field_is_mandatory') }}</span>
          </div>
        </div>

        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
          <div class="user-box">
            <input type="email" v-model="user.email" id="email" name="email" required="" @blur="$v.user.email.$touch()">
            <label>{{ $t('email') }}</label>
            <!-- Error email -->
            <span v-if="$v.user.email.$error" class="error-text">
              <span v-if="!$v.user.email.required">* {{ $t('field_is_mandatory') }}</span>
              <span v-else-if="!$v.user.email.email">* {{ $t('enter_valid_data') }}</span>
            </span>
          </div>
        </div>

        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
          <div class="user-box">
            <input type="text" v-model="user.message" id="message" name="message" required=""
              @blur="$v.user.message.$touch()">
            <label>{{ $t('message') }}</label>
            <!-- Error message -->
            <span v-if="$v.user.message.$error" class="error-text">
              <span v-if="!$v.user.message.required">* {{ $t('field_is_mandatory') }}</span>
              <span v-else-if="!$v.user.message.minLength">* {{ $t('message_longer_6_characters') }}</span>
            </span>
          </div>
        </div>

        <div class="col-12 btn_form_container">
          <button class="btn btn_send">{{ $t('send') }}</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { email, minLength, required } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";

export default {
  name: "FormComponent",
  validations: {
    user: {
      name: { required },
      surname: { required },
      telephone: { required },
      email: { required, email },
      message: { required, minLength: minLength(6) },
    }
  },
  data() {
    return {
      // Form Validation
      user: {
        name: "",
        surname: "",
        telephone: "",
        email: "",
        message: "",
      },
      submitted: false
    }
  },
  methods: {
    handleSubmit() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.$toast.error(this.$t('fill_all_fields_correctly.'));
        return;
      }

      this.$axios.$post('/sendInformation', {
        name: this.user.name,
        surname: this.user.surname,
        telephone: this.user.telephone,
        email: this.user.email,
        message: this.user.message,
      })
        .then((response) => {
          this.user = {
            name: "",
            surname: "",
            telephone: "",
            email: "",
            message: "",
          };
          // document.getElementById("contact_form").reset();
          this.$v.$reset();
          this.$toast.success(this.$t('request_sent_successfully.'));
        })
        .catch((err) => {
          if (err.response.status === 400) {
            this.$toast.error(this.$t('error_Invalid_request.'));
          } else if (err.response.status === 500) {
            this.$toast.error(this.$t('server_error.'));
          }
        });
    }
  },
  computed: {
    ...mapGetters({ contactsAll: "module/contacts/getAllContacts" }),
  },
}
</script>

<style scoped>
.login-box {
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.login-box .user-box {
  user-select: none;
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 22px;
  color: #000000 !important;
  margin-bottom: 40px;
  border: none;
  border-bottom: 2px solid rgb(209 213 219);
  outline: none;
  background: transparent;
}

.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 18px;
  color: var(--light-mode-color-4);
  pointer-events: none;
  transition: .5s;
  text-transform: capitalize;
}

.login-box .user-box input:focus~label,
.login-box .user-box input:valid~label {
  top: -20px;
  left: 0;
  color: var(--light-mode-color-4);
  font-size: 14px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: var(--light-mode-color-4);
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px
}

.login-box a:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4,
    0 0 25px #03e9f4,
    0 0 50px #03e9f4,
    0 0 100px #03e9f4;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }

  50%,
  100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }

  50%,
  100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }

  50%,
  100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }

  50%,
  100% {
    bottom: 100%;
  }
}

.btn_form_container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn_send {
  color: var(--light-mode-font-color-white);
  background-color: var(--light-mode-color-2);
  min-width: 200px;
  border: 1px solid var(--light-mode-color-2);
}

.btn_send:hover {
  color: var(--light-mode-color-2);
  background-color: transparent;
}


@media only screen and (max-width: 768px) {
  .btn_send {
    min-width: 100%;
  }
}
</style>
