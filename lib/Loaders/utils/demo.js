
import rebound from './rebound';
import * as Spinner from './Spinner'

export const demo = {



    spring: null,
    spinner: null,

    initRebound(settings) {
        let settingsRebound = settings.rebound;
        let springSystem = new rebound.SpringSystem();
        demo.spring = springSystem.createSpring(settingsRebound.tension, settingsRebound.friction);
    },

    initSpinner(settings) {
        let settingsSpinner = settings.spinner;
        demo.spinner = new Spinner.Spinner(settingsSpinner);
    },

    init(settings, timeout) {
        let spinnerTypeAutoSpin = true;

        demo.initRebound(settings);
        demo.initSpinner(settings);

        demo.spinner.init(demo.spring, spinnerTypeAutoSpin);

        if (spinnerTypeAutoSpin) {
            if (timeout) {
                setTimeout(() => {
                    demo.spinner.setComplete();
                }, timeout);
            }
        }
    },
};