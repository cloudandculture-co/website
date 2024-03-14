<script>
        window.addEventListener('load', function () {

            function checkForm() {
                if (cookieconsent && cookieconsent.get('level') && cookieconsent.get('level').includes('analytics')) {
                    // document.getElementById("contact-form-main").hidden = false;
                    // document.getElementById("contact-form-error").hidden = true;
                    console.log('enable');
                } else {
                    // document.getElementById("contact-form-main").hidden = true;
                    // document.getElementById("contact-form-error").hidden = false;
                    console.log('disable');
                }
            }


            var cookieconsent = initCookieConsent();
            checkForm();

            cookieconsent.run({
                    autorun: true,
                    page_scripts: true,
                    current_lang: 'en',
                    revision: 1,
                    // theme_css : 'assets/css/coo',

                    onAccept: function () {
                        // do something ...
                        console.log("D")
                        checkForm();
                    },


                    languages: {
                        en: {
                            consent_modal: {
                                title: "Cookies & Privacy Options",
                                description: 'In order to make this site available to you online,' +
                                    ' we use cookies and similar technologies to help us to do this.' +
                                    ' Some are necessary to help our website function properly and can\'t be switched off, others are optional and used for our analytics purposes.' +
                                    'By clicking "Accept" you choose to accept both required and analytics cookies and by selecting "Reject" no cookies will be used.' +
                                    '',
                                primary_btn: {
                                    text: 'Accept',
                                    role: 'accept_all'  //'accept_selected' or 'accept_all'
                                },
                                secondary_btn: {
                                    text: 'Reject',
                                    role: 'accept_necessary'   //'settings' or 'accept_necessary'
                                }
                            },
                            settings_modal: {
                                title: 'Cookie settings',
                                save_settings_btn: "Save settings",
                                accept_all_btn: "Accept all",
                                reject_all_btn: "Reject all", // optional, [v.2.5.0 +]
                                close_btn_label: "Close",
                                blocks: [
                                    {
                                        title: "Cookie usage",
                                        description: 'Your cookie usage disclaimer'
                                    }, {
                                        title: "Strictly necessary cookies",
                                        description: 'These are required for the basic and secure operation of the site ',
                                        toggle: {
                                            value: 'necessary',
                                            enabled: true,
                                            readonly: true
                                        }
                                    }, {
                                        title: "Analytics cookies",
                                        description: 'These are required to help us carry out anonymous analysis into our website users so that we may improve our content and services. See <a href="https://policies.google.com/privacy"> ',
                                        toggle: {
                                            value: 'analytics',
                                            enabled: true,
                                            readonly: false
                                        }
                                    },
                                ]
                            }
                        }
                    },
                    onChange: function () {
                        console.log(cookieconsent.get('level'));
                        checkForm();

                    },
                }
            );


        });
    </script>