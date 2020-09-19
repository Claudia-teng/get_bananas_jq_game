$(function () {

    the_game = function () {

        if (check_banana_hits_floor(banana1) || check_banana_hits_monkey(banana1)) {
            set_banana_to_initial_position(banana1);
        } else {
            banana_down(banana1);
        }

        if (check_banana_hits_floor(banana2) || check_banana_hits_monkey(banana2)) {
            set_banana_to_initial_position(banana2);
        } else {
            banana_down(banana2);
        }

        if (check_banana_hits_floor(banana3) || check_banana_hits_monkey(banana3)) {
            set_banana_to_initial_position(banana3);
        } else {
            banana_down(banana3);
        }

        if (life > 0) {
            anim_id = requestAnimationFrame(the_game);
        } else {
            stop_the_game();
        }
    };

    anim_id = requestAnimationFrame(the_game);

});