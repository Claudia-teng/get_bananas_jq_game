
$(document).on('mousemove', function (e) {
    monkey.css('left', e.pageX);
});

function banana_down(banana) {
    banana_current_position = parseInt(banana.css('top'));
    banana.css('top', banana_current_position + speed);
}

function check_banana_hits_floor(banana) {
    if (collision(banana, floor)) {
        show_bulls_eye(banana);
        decrement_life();
        return true;
    }
    return false;
}

function set_banana_to_initial_position(banana) {
    banana.css('top', banana_initial_position);
}

function show_bulls_eye(banana) {
    bullseye_num = banana.attr('data-bullseye');
    $('#bullseye' + bullseye_num).show();
    hide_bulls_eye(bullseye_num);
}

function hide_bulls_eye(bullseye_num) {
    setTimeout(function () {
        $('#bullseye' + bullseye_num).hide();
    }, 800);
}

function decrement_life() {
    life--;
    if (life < 0) life = 0;
    life_span.text(life);
}

function check_banana_hits_monkey(banana) {
    if (collision(banana, monkey)) {

        monkey.css("background", "url('images/monkey2.png')")
        monkey.css("background-size", "cover");

        setTimeout(function () {
            monkey.css("background", "url('images/monkey.png')")
            monkey.css("background-size", "cover");
        }, 500);

        banana_top = parseInt(banana.css('top'));
        if (banana_top < monkey_top) {
            update_score();
            return true;


        }

    }
    return false;

}

function update_score() {
    score++;
    score_span.text(score);
    if (score % 10 === 0 && speed <= max_speed) {
        speed++;
    }
}

function stop_the_game() {
    cancelAnimationFrame(anim_id);
    container.css("filter", "brightness(0.8)")
    restart.slideDown();

}

restart.click(function () {
    location.reload();
});