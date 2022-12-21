<template>


    <div class="wrapper" dir="ltr">
        <p style="margin-bottom: 0.5rem;">Left to Right (LTR)</p>
        <article class="media">
            <img src="../assets/images/logo.png" alt="">
            <div class="">
                <h2>Welcome to the article!</h2>
                <p>You'll learn how to prepare your website for RTL languages.</p>
            </div>

        </article>

        <p style="margin-bottom: 0.5rem;" dir="rtl">Right to Left (RTL)</p>
        <article class="media" dir="rtl">
            <img class="img" src="../assets/images/logo.png" alt="" />
            <div class="">
                <h2>أهلا وسهلا بك في المقال!</h2>
                <p>سوف تتعلم كيفية تحضير موقعك ليعمل باللغات من اليمين إلى اليسار.</p>
            </div>

        </article>
    </div>

    <div class="card-main" dir="ltr">
        <div class="card-mid">
            <div class="card">
                <div class="card-img">
                    <img src="./../assets/images/logo.png" alt="">
                </div>
                <div class="card-content">
                    <h1>This is title</h1>
                    <h1>This is subtitle</h1>
                </div>
            </div>

        </div>
    </div>


</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.media {
    background: #fff;
    box-shadow: 0 5px 10px 0 rgba(#000, 0.05);
    padding: 1rem;
    margin-bottom: 2.5rem;
    display: flex;

    h2 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }


    img {
        max-width: 100%;
        border: 1px solid lightgrey;
    }


}

.media[dir="rtl"] img {
    float: right;
    margin-right: 0 !important;
    margin-left: 36px !important;
}

.link {
    display: inline-block;
    margin-top: 1rem;
    //background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%231d7bb3'%3E%3Cpath d='M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z'%3E%3C/path%3E%3C/svg%3E") right center/20px no-repeat;
    //padding-right: 24px;
    color: #1d7bb3;
}

/* Non Demo Related Styling */
body {
    background: #f6f6f6;
    font-family: 'Rubik', sans-serif;
    line-height: 1.35;
}

.wrapper {
    max-width: 800px;
    margin: 2rem auto;
    padding-left: 1rem;
    padding-right: 1rem;
}

.card-main {
    background-color: #1d7bb3;

    .card-mid {
        width: 50%;
        margin: auto !important;
        background-color: lightblue;

        .card {
            background-color: lightcoral;
            display: flex;
            flex-direction: row;
            width: 33.33%;


            .card-img {
                background-color: rebeccapurple;

                img {
                    width: 100px;
                }
            }
        }
    }

}
</style>