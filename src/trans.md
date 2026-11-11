So whenever we are doing any data fetching

in any web application

and dealing with asynchronous data,

we always need to assume that something can go wrong.

And so therefore, let's now account

for that situation by handling those errors.

So one of the things that can go wrong

is your users suddenly losing their internet connection.

So let's simulate that here again in our network tab

and let's make sure that we are first on slow 3G.

Then let's reload here, and then

while the movies are loaded, we will click on offline.

So right now,

so you see that now the application

basically never leaves the state.

And also when we come to our console here we see

that we failed to fetch,

which again is because our user basically now

lost their internet connection.

So when that happens, we want to display some kind

of error message here on the screen and not

keep the application in this loading state here forever.

Because like this, the user will think

that the data might eventually arrive

but of course it will not.

Now, reacting to errors like this is actually not built

into the fetch function itself.

And so we have to kind of do that manually.

And so let's try that here in our fetch movies function.

So here on the response object

that we receive from fetch exists one, okay, property.

And so here we can check for that.

So basically if the response is not okay

then we want to throw a new error.

And again, this is pretty standard JavaScript code.

So then let's just say something went wrong

with fetching movies now, okay?

And so now if we throw an error here

we need to wrap all of our code into a try catch block. So,

try and catch

which again is just a normal JavaScript feature.

This one has nothing to do with React.

Okay, and here let's console that error.

That error, okay?

And then let's come back here.

Well, if we load now, then of course nothing will work.

So let's do that trick again where first

we set it to slow 3G,

then let's reload and then let's wait for it.

We set our users back to offline right now.

And so where is it?

Well, it's not actually anywhere here,

but well, that's not really important anyway.

So let's actually just log error dot message.

So this is the property of the error

where this string here will get saved into

but then what we're actually interested in,

is to get this message here onto the screen.

So basically displaying it right here instead of loading.

So that means that we need another piece of state.

So basically a piece of state indicating

whether we currently have an error or not.

So const error

and set error.

And so here, this one is actually not a bullion,

but it's truly the error message.

Okay, so here

let's then set the error

to actually that message.

And again, error dot message is basically

this string that we passed into the error

and error is the error itself

as it was passed into this catch block.

And again, that is just basic JavaScript.

All right,

and then let's do some conditional rendering here

to basically get the error here

onto the screen whenever there exists one.

Now, okay, and let's start

by creating a new error component here

or maybe let's call it error message.

And it will receive a prop

with some message that it will then display on the screen.

So let's return again a paragraph this time

with the class name of error, which,

as always, I already included into my CSS file.

Then here let's maybe add some small emoji here,

like this one.

So showing there was some kind of problem.

And then here we simply display that message.

So this is a very simple presentational component.

Remember that?

Okay. Now here in our conditional rendering

basically what we want to do is

that when it's no longer loading

then we want to display this movie list

but only if there was no error.

So basically here we now would have to nest another ternary

inside this ternary, but that makes for really ugly coat.

And so let's do something else instead.

So let's comment out this entire part.

Or well, only this one.

So the box of course we still need,

but then let's do is loading.

And if there's no error

then display this movies list right here.

Now if there is an error

then display the error message component

with the error or I think it's called message.

So with the message prop set to error.

And here of course, it needs to be

that the data is not loading and there is no error.

And finally, we also need to account

of course for the is loading state.

So if it is loading, then just display our loader.

So here the situation is indeed a little bit tricky

with all these different states that we have

and with all the conditional rendering, but well

these are now three mutually exclusive conditions.

So it is either loading or it is not loading

and there is no error or there is an error.

So only one of these three here

can be true at the same time.

And so that's very important

so that we don't display multiple

of these components at the same time by mistake.

So let's give it a save and let's try again.

So back to our 3G

and then I will set it to offline very soon.

Let's wait for it.

And there it is.

So we get our error message correctly displayed here.

However, there's still some problem

because the loading state is still set to true

and in fact that's actually correct.

So as soon as the error here is thrown,

this rest of the code is no longer evaluated.

And so therefore is loading is never set to fault.

So our application will keep thinking

that the data is still being loaded.

So again, the problem is

that after this error is being thrown

then React will basically never see

this piece of code here,

where the loading state is reset.

So instead of doing that here

let's attach a finally block here.

So this block of code here will basically always be executed

at the very end.

Okay? And as an alternative

we could have kept the code here and also pasted it here,

but that would've created a duplication of code.

So with this, it's going to be a lot better.

Now, I will not try this yet here

because actually I want to handle another kind of error

which is not really an error,

but also situation where we want to display a message

which is the situation

in which we cannot find any movie for the search Query.

So let's say the Query is like this one here

and of course the API will not find anything.

So let's remove all throttling,

and well, what happens here?

Well, basically the length cannot be read of undefined.

And so the problem here is that the data

that comes back from the API now,

is apparently undefined.

So let's take a look at that.

So just at data here, and let's try that again.

And so indeed, we no longer have the search property here,

so we no longer have data dot search.

And so what's happening then is that data search

is being set to undefined,

and therefore we get this other error here.

So as I was saying in the very beginning

we always need to handle

all these different situations that can go wrong.

And when we are working with data fetching

there's always a lot of things that can go wrong.

So working with data is a lot of work

but it's also essential in most

if not all web applications.

But anyway, here we can now use this response

to our advantage,

in order to throw another error in this situation.

So we can say that data dot response,

and actually, this now needs to be here

after we already have the data.

So in this case, if data responds is equal faults

and so for some reason the API here responds

with the string of faults and not a bullion

but while this still works, so in this case, let's

also throw a new error and let's simply say

movie not found.

Alright, and beautiful.

Let's just reload.

And then here we get this log.

So that's this console dot error coming from here.

And then indeed we get our error message also displayed

on the UI.

So this one was maybe a little bit trickier.

So let's just quickly recap.

So what we did was to implement another state variable,

this time, specific for the error

so that whenever some error occurred

we could store the error message in there

and then display it in the UI as soon as an error occurred.

Now, as soon as an error did occur, which is

in this situation, and in this one we threw a new error,

and then we caught that error

inside the catch block of this try-catch.

And so this is a standard way

of catching errors in JavaScript.

And so in this situation, we then set the error state

to the message of the error that we specified here.

Then finally, we used of course, that state variable

in order to render something on the screen conditionally.

And so that was right here.

So this part here is maybe a bit confusing.

And so make sure that after this video you just

analyze exactly what's happening here and that,

in fact these three conditions here are mutually exclusive.

So only one of them will ever be true.

Okay? And I think that for now this is enough

for error handling in this application.

So that's always a very,

very important part that many people overlook.

But it is of course essential

to deal with these kind of situations.

So, I have mentioned

the use effect dependency array a few times already,

but we don't know yet what it actually does

and how it works.

So, let's change that in this lecture.

So, as we saw at the beginning of this section,

by default in effect will run after each and every render.

However, that's almost never what we want.

But, the good news is

that we can change this default behavior

by passing a dependency array into the useEffect hook

as a second argument,

but why does use effect actually need

an array of dependencies, you might ask?

Well, the reason is that without this array,

React doesn't know when to actually run the effect.

But, if we do specify the effect dependencies

by passing in the dependency array,

the effect will be executed each time

that one of the dependencies changes.

And, we will come back to why this is so amazing

in the next slide.

But, for now, this is all you need to know.

Now, what exactly are those dependencies?

Well, effect dependencies are state variables

and props that are used inside the effect.

And, the rule is that each

and every one of those state variables and props

must be included in the dependency array.

But, let's take a look at an example

to understand what I'm talking about.

And, the code here is really not important.

What matters is that the effect uses the title prop

and the user rating state.

We can clearly see at the top of the code

that title is indeed a prop

and that user rating is indeed a APs of state.

Therefore, both of them must be included

in the dependency array.

So, the effect function depends on these variables

to do its work,

and therefore we need to tell React about them.

Otherwise, if the title or the user rating changes,

React will not know about this change,

and, therefore, it won't be able to re-execute

the effect code.

And, this will then lead to a bug called stale closure.

And, we will talk about what a stale closure is

and also about some more rules for the dependency array

in a later more advanced section.

But, for now, let's actually understand

why the dependency array is so important

for the useEffect hook.

So, I like to think of the useEffect hook

as an event listener that is listening

for one or more dependencies to change.

And, when one of the dependencies does change,

use effect will simply execute the effect again.

So, a bit like a regular event listener,

but for effects.

But, let's go back to our previous example

where we had the title and user rating dependencies

in the array.

So, whenever the title or the user rating changes,

React will execute the effect again.

So, it will run the code one more time,

which will in turn update the document title.

So, the website title that we see in a browser tab.

So, essentially, effects react to updates

to state and props that are used inside the effect,

because, again, those are the effects' dependencies.

So, in a way, effects are reactive,

just like React reacts to state updates

by re-rendering the UI.

And, this is extremely useful and powerful,

as we will see throughout the rest of the course.

But, all this only works if we correctly specify

the dependency array.

Okay, but now let's remember how I said

in the very first lecture about effects,

that effects are used to keep a component synchronized

with some external system.

So, some system that lives outside of our React based code.

And, if we think about it,

that's exactly what is happening here.

So, the state and props of our component

are now in fact synchronized with an external system,

which is, in this case, the title of the document.

Now, updating the title in some other way

will, of course, not magically update the title

or user rating.

So, the synchronization only works in one way,

but that's not really the point.

The same actually happens with state updates

and we still say that the UI is in sync with state.

So, the point is that use effect

truly is a synchronization mechanism,

so a mechanism to synchronize effects

with the state of the application.

And, you will discover this

each time that you're going to use an effect.

And, so let's go explore this a little bit further.

So, as we just learned, whenever a dependency changes,

the effect is executed again.

But, now, let's remember that dependencies

are always state or props.

And, what happens to a component each time that its state

or props are updated?

Well, that's right.

The component will re-render.

This means that effects

and the life cycle of a component instance

are deeply interconnected.

That's why when the useEffect hook was first introduced,

many people thought that it was a life cycle hook

rather than a hook for synchronizing the component

with a side effect.

Now, the conclusion and the big takeaway from this

is that we can use the dependency array

in order to run effects

whenever the component renders or re-renders.

So, in a way, the useEffect hook

is actually about synchronization

and about the component life cycle.

Okay, and so with this knowledge,

let's look at the three different types of dependency arrays

that we can specify

and also how they affect both synchronization

and life cycle.

So, when we have multiple dependencies

like in this first example, variables X, Y, and Z,

it means that the effect synchronizes with X, Y, and Z.

Now, in terms of the life cycle,

it means that the effect will run on the initial render

and also on each re-render triggered by updating

one of the dependencies X, Y, or Z.

So, again, just to make this crystal clear,

the effect will be executed each time

the component instance is being re-rendered

by an update to X, Y, or Z.

But, if some other piece of state or prop is updated,

then this particular effect will not be executed.

Now, if we have an empty dependency array,

that means that the effect synchronizes

with no state or props,

and therefore it will only run on mount.

In other words, if an effect has no dependencies,

it doesn't use any values that are relevant

for rendering the component.

And, so, therefore, it's safe to be executed only once.

Finally, if we have no array at all,

we already know that the effect will run on every render,

which is usually a really bad idea and not what we want.

Now, if the effect runs on every render,

that basically means that the effect

synchronizes with everything.

So, essentially every state and every prop in the component

will be dependencies in this case.

And, now, to finish,

let's look at when exactly effects are executed

during the render and commit process.

Now, I mentioned in the first lecture on effects

that effects are executed after render.

And, while that's not wrong, it's also not the full story.

So, let's look at a timeline of events that happen

as components render and re-render.

And, I found this extremely useful

when I first learned about the useEffect hook myself.

And, so I think that you will benefit from this as well.

So, as we already know,

the whole process starts with mounting

the component instance,

in this case an instance of movie details.

After that, the result of rendering

is committed to the dom,

and finally the dom changes are painted onto the screen

by the browser.

So, this is just what we learned in the previous section,

but where do effects come into play here?

Well, effects are actually only executed

after the browser has painted the component instance

on the screen.

So, not immediately after render,

as you might have thought initially.

That's why we say that effects run asynchronously

after the render has already been painted to the screen.

And, the reasons why effect work this way

is that effects may contain long-running processes,

such as fetching data.

So, in a situation like that,

if React would execute the effect

before the browser paints a new screen,

it would block this entire process,

and users would see an old version of the component

for way too long.

And, of course, that would be very undesirable.

Now, one important consequence of the fact

that effects do not run during render

is that if an effect sets state,

then a second additional render

will be required to display the UI correctly.

And, so this is one of the reasons

why you shouldn't overuse effects.

Okay, but moving on now,

let's say that the title was initially set to Interstellar,

but then it changes to Interstellar Wars.

And, since this title is a prop,

it means that the component will re-render,

and the dom changes will be committed

and painted to the screen again.

Now, since title is part

of the dependency array of this effect,

the effect will be executed again at this point.

So, just as we learned in the last slide.

And, this whole process can of course be repeated

over and over again

until this movie details instance

finally unmounts and disappears from the screen.

Now, you might notice that there is actually a hole

between the commit and browser paint, right?

And, the reason is that, in React,

there's actually another type of effect

called a layout effect.

So, the only difference between a regular effect

and a layout effect is that the layout effect runs

before the browser actually paints the new screen.

But, we almost never need this.

And, so the React team actually discourages

the use of this use layout effect hook.

I simply mentioned this here

so that you know that this also exists.

And, actually, there are even two more holds

in this timeline.

But, we will talk about these mystery steps

by the end of the section.

So, stay tuned for that.

Let's now put some of the things

that we just learned in the previous lecture into practice

and also magically synchronize our search query

with the movie search results.

And I actually want to start this lecture

with a couple of experiments.

And to do that, let's first do a couple of changes here.

First, let's set this back to "Interstellar."

And I also want to rename this variable here to tempQuery.

And that's because now we actually want to get

the query state that right now lives here inside search

into the app, so into its parent component.

So let's cut this from here

and we will then later pass in both of these back in.

So query and setQuery.

Okay, so we're basically lifting this state up

because we will need it here inside the app component.

So now let's pass those props in

so that Query equals Query

and setQuery is of course set.

Well, not error.

setQuery.

Apparently I wrote the name of the movie wrong here.

"Interstellar."

And then also let's get rid of this console dot log here.

Okay, let's reload just to clean this up.

And now let's do those experiments that I was talking about.

So basically I want to write a couple of effects here

and then I want you to guess

in which order they will be executed.

At least that's gonna be your first experiment.

So let's write one effect.

And then as always, we need to specify a function.

And this one will log to the console, the string A.

All right, then let's get another one.

And notice how this one doesn't have a dependency array.

Well, let's actually add it to this one,

but the second one here won't have any.

So this one will just log the string B.

And then finally,

I will simply do a console.log right here in the top level.

Okay, and now without running this code, let's try to guess

in which order these three strings here

will appear in the console.

So have you thought about it?

Well, I will now save

and then we will discuss the results.

Okay, and actually we have a lot of renders here,

a lot of results, but that's because the application

has rendered and re-rendered a couple of times.

And so then we got all these logs.

And also keep in mind that these effects actually run twice.

But what matters here

is that first we got C, then A, and then B.

So why did we get C first

even though it appears later here in the code?

Well, the reason is that as we just discussed before,

effects actually only run after the browser paint

while the render logic itself runs,

well, as the name says, during render.

And so then it makes sense that of course

this console.log here is executed first,

so during the render of this component.

And then we have A and B,

which comes from these two effects.

And so A is rendered first

simply because it appears first in the code.

Okay, now let's actually clear the console.

And now what I'm going to do is to type something here.

And so let's see what happens then.

And we get some more outputs.

So we get C and B.

So is this what you were expecting?

Well, let's again analyze what just happened here.

So we updated this state here, which is the query state

and as a result, the component was re-rendered.

And then just like before, this code here was executed

and so therefore we see the letter C first

and then after that we also have a B log.

And so that is this effect here

which has no dependency array,

which, remember, basically means

that this effect is synchronized with everything

and so therefore it needs to run on every render,

while this other effect here,

this first effect is synchronized with no variables at all,

which is the meaning of this empty array.

And therefore this effect was not executed

as the component was re-rendered with the query state.

Okay, so now we can change here the strings

and we can actually say that this here is during render.

This here is after every render,

and this is after the initial render.

Okay.

And of course, this is only for you to keep

as a reference here just so we are understanding

what's actually happening.

So now let's do another one.

So one final experiment here

which will be yet another effect.

Let's call this one D now.

And here in the dependency array,

we will have the query state.

So give it a save,

and now watch what happens when I type here.

So you see that this one here

during render, of course, always gets executed.

Then this one here, after every render as well,

and still not this one, but we now have this other effect

which is synchronized with the query state variable.

And so this query just changed

and therefore this effect was executed and logged D.

And if we keep doing this

then D keeps getting logged to the console,

while if we changed some of these other states here,

then we would not get D logged here.

So we cannot really simulate that here now

but you can still trust me on that one.

But anyway, let's now use what we just did here

to our actual advantage in the application.

So I will now

just comment these out and reload here.

And so now the time has come

where we actually want to use the query from here

right inside this URL where we fetch the movies.

So basically we want to fetch movies

based on the search query right here.

So instead of the temporary query,

let's now use query here, give it a save.

But of course, like this, it is not going to work.

So as we change this here to something

nothing is going to happen.

And why is that?

Well, it's because this effect

is not yet synchronized with the query state.

So we are using this state variable inside the effect

but the effect doesn't know yet

that it will have to rerun each time

that a query state changes.

And so to fix that, we need to include that query

here in the dependency array.

And actually you see already that React is complaining.

So here as we hover,

we see that this hook has a missing dependency.

So this error or this warning actually is really,

really helpful so that we never forget

to correctly declare the dependencies of this effect.

And so as we give it a save now,

let's again reload, and here now we get this error

that the movie is not found, which is because our query

by default is just this empty string.

But if we try now, let's say test,

then, well, it still doesn't work.

So let's come again to our network tab.

So let's just check out

if actually the HTTP request has been correctly made.

And so by doing this, you're also learning

about these very important developer tools here.

Okay, so here we see some new HTTP requests

and as we click here, we actually do see a response.

So there is something there

but somehow our movies are still not being shown here.

And I think I know the reason for that

which is that we are never resetting the error state.

So at some point we had some error here

but now we no longer have an error,

but at no point in the application

we are actually resetting it.

So we need to also do that here in the finally,

or actually better yet,

we should do it right here at the very beginning.

So basically, always before we start fetching for data,

we reset the error.

So set error,

and then back to the empty string.

Give it a save, and now we get some results for test.

Okay, and then as we delete this

then we are back to "Movie not found."

The same for "inter" for some reason, and then "stellar."

And now we get some movie here, it's not the same as before.

And the reason for that is something called a race condition

but at least something is working here.

So if I write this a bit slower, then it works just fine.

And of course this works with any other movie

as long as for now you type slow enough.

Now I want to fix this problem

that when we have no search query here

then it tells us "Movie not found,"

which is not really true.

I mean, it is true because the API actually searched

for a movie with an empty string.

But in a situation where we have no query

we actually don't even want to search, right?

And so let's do that here in our effect.

And actually let's do it

before we even call this function here.

So we can say if there is no query.length,

so it's going to be zero in this situation,

then simply set to Movies back to an empty array.

So basically then removing all the movies

from the user interface,

then let's also reset the error

back to nothing and then return.

And so in this situation then the fetchMovies function

will not even be caught.

And here we can actually go even further.

So we can say, like if the query length is less than three,

then it's not even worth searching as well.

So it doesn't even make sense to have

a query just like this, right?

So there's no movies really called like that.

So going back again to our network tab,

if we just type like this,

you see that no new fetch requests were made.

But now if I keep writing,

so now we have more than three characters,

then we had our first HTTP request to the API,

then we got these results, and if I type again

then you see we got another one.

And now when I delete all this

then it simply goes back to empty.

So we deleted all the movies from our state, basically.

Okay, and so with this,

we have the basic functionality already implemented.

So let's recap what we just did here

and what is going to happen

whenever we type a new query here.

So the query is of course a piece of state, right?

So that is pretty obvious.

And so we are referencing that query variable

a couple of times inside our effect here, right?

And so therefore, we then included this query variable

also in the dependency array of this effect.

And so now our use effect hook

is basically like an event handler

that is listening for the query to change.

And so then when it changes

the entire effect is executed again, which in our case means

that a new request is gonna be made to our movies API.

So again, this effect that we just wrote here

basically reacts to an update to this state variable,

which makes the entire effect basically reactive,

so reactive to that state.

But at the same time, our effect will also be still executed

during the initial render.

Just right now, that is the empty string,

which we just basically told our effect to ignore.

So let's write another amazing movie here.

And so as we save this now, and so as our application

first loads, it will immediately fetch the data right here.

And so indeed, as we just learned in the previous lecture,

this effect basically now runs on the initial render

and whenever the state variable here updates.

So it is synchronized with this variable here.

And as you see, this is really, really powerful

and can be used in all kinds of situations.

So make sure that you really understand

everything that we just did here,

as this was a really, really important lecture.

And then let's move on to the next video

where we will finally have the ability

to select one of these movies

so that we can then load some additional details

here into the right side.

So that's gonna be really, really fun.

And so I hope to see you there soon.

Let's keep working on our application

and allow users to select a movie

so that they can see some details about it.

So checking our demo app,

what we want to do now again is to add the ability

to select a movie like this.

And so then our app will load some additional data

about that movie and display it here.

And then we can also go back by clicking on this button,

which will then close that movie.

All right.

So basically that is adding some more dynamics

to the application.

And so what that means once again

is that we need a new piece of state.

And so that state will basically store

which movie has been selected here.

Now the selection itself, so updating the state,

will happen here in this box on the left side, right?

But the displaying of the movie happens here

on the right side, so in this box.

So this box will also need to know about the selected ID.

And so this means that this new piece of state,

so the selected ID state, will have to live here

in the parent component, so right in app.

So, selectedId

and setSelectedId,

useState,

and we are going to start with null.

And here it's, of course, Selected.

Then here, let's get rid of this,

which we don't need anymore.

And now you might be wondering why here we are only going

to store the ID and not the entire movie object itself.

Well, the reason for that is that the movies

that we get here from the search are very limited.

So we only get the data really about the title, the year,

and the poster here.

While here on the right side,

we will want all kinds of details

that are not included in this first search.

So there will have to be another API call.

And we can see that here when we click,

it loads the movie again.

And so only then all of these details here are fetched.

And this fetch here,

so this movie will be fetched based on the ID

that we got here in this array.

So let's take a look at that quickly.

So it's very important

that you understand how we actually built this application.

So it's not just about the React concepts themselves

but also about the logic of how we build an application.

So I think that's also pretty important.

So let's see.

So taking a close look at our results,

each of the objects has the poster,

the title, the type, the year, and the ID.

And again it's based on this ID

that we then will search for details.

And actually let's copy this ID here,

and I will temporarily use that here.

All right.

So just so we can see what happens

when we actually have a selected movie.

Then we no longer need this,

and now let's create a new component.

And so that component will then be displayed

if there is a selected ID.

So basically that's like a selected movie.

So movie list, movie, let's do it right here,

function SelectedMovie.

And this one will get as an input,

as you can guess, the selectedId.

So here let's for now just return a div

with the class name of detail.

And then for now, all we are going to do

is to display that selected ID in there.

All right.

And now going back up here into our JSX,

here on the right side, we now want to display not this,

but instead that component that we just created

in case that there is a selected ID.

So let's wrap all of this into a JavaScript mode block,

and then let's do a ternary operator.

So all we have to do is to say

if there is a selectedId, then display MovieDetail.

I'm not sure why that's not appearing here.

Maybe I gave it some other name.

Ah, SelectedMovie.

Well, actually I wanted to call it MovieDetail

or MovieDetails even.

So that makes a bit more sense, I think.

Yeah, so MovieDetails.

And then we pass in the selectedId.

Okay.

And if not, then that's where we want to display these two.

However, this is not going to work, so let's see.

And indeed, once again,

it's because here we have a piece of JSX,

so all this, which has basically two root elements.

So it doesn't have just one single parent element,

which, remember, is always necessary in a piece of JSX.

And so this is yet another great use case of a fragment

because, of course, we don't want

to create like a new div element

or something like that around these two.

So, just like this.

And again the reason for that is here

as the third part of the ternary operator,

we needed a new piece of JSX,

which cannot have two elements as the root element.

And so we just created one root element with the fragment.

Okay.

So now we can indeed see this ID that we passed in,

so the SelectedId,

but, of course, we don't want this to be hard-coded.

So let's set it back to null,

and then this will disappear.

Indeed.

And so the final step, as always, is to update the state.

So where are we going to do that?

Well, basically as the user clicks one

of these movie objects

or actually movie components.

So let's go to the movie component then,

and let's do that here with the trick

where we hover and then command or control + click.

So, movie list, and then right here on the movie on the li,

we can attach the onClick handler.

However, we don't have access to any function here yet,

so let's first go back and create that function.

So let's do that, well, maybe before the effect.

Okay, so let's do that here.

So this is just what we have done many times before,

which is in the component that owns the state,

we write some event handler functions that we then pass down

to some child component to update the state in the parent.

So here I will call it handleSelectMovie.

And so then this will pass in a movie ID.

Set selected ID to that ID.

And so we could also have simply

passed down the setSelectedId,

but I think like this,

it is a little bit cleaner in some situations.

All right.

So it's cleaner in my view

because like this, we give it a really clear name,

and so then we know exactly what's happening.

Ah, of course, we didn't pass it yet into the movie.

So that movie is inside MovieList.

And so we need to pass it there first.

So here we are going to need a little bit of prop drilling,

but if it's just one level,

then that's not a big deal at all.

So let's call this here onSelectMovie,

will be handleSelectMovie.

And then let's just grab this, move to our movie list.

Then we accept that prop here

and pass it right into the movie,

so just like we have have been doing so many times

except that here and then here,

we need to create a brand-new function,

remember, not just calling a function.

Okay, and then we pass in the movie.imdbID.

So we can see that right from here.

So in each of the movie objects,

the ID has this name right here.

Okay, give it a save, and now let's see what happens.

So we click here.

Then we get this ID.

Then we get another one.

And then here we get this,

which is exactly the same as this one.

So, this is working great.

The only thing I noticed

is that here we don't have these styles, which here we have.

Let me just see if we are missing,

if we are missing some styles here.

And apparently this list here

also needs the list of movies class.

So I forgot that one earlier.

And yeah, so now as we hover over each of these movies,

we get this nice highlighting.

Okay, and now just to finish,

let's quickly add the ability

to also close basically the movie detail,

which is simply to set the selected ID back to null.

So, let's create that function as well,

so handleCloseMovie.

And this one doesn't need anything

because all it will do is to set the selected ID to null.

Okay.

And then, of course, we need to pass this function

into the movie detail.

So right here, onCloseMovie.

And then let's grab that, move there,

pass it in.

And now let's just create a button here.

And this one has the class of btn-back

and onClick.

Well, it's simply onCloseMovie.

And so since in this case we are not passing

in any ID here or anything,

there's no need to create a new function.

So, of course, we could do this,

which would be exactly the same thing,

but that doesn't make sense in this case

because, again, there's no need

to pass anything into this function.

So let's just do this.

But, of course, we also need some content into that button.

So let's use this HTML entity, which means left arrow.

And there we go.

So if we click this, then we go back to what we had before.

Now finally, we could also implement

that when we click here again,

that it will also close the movie.

So, of course, if we click on one of the other ones,

then we see the ID here change.

But if we click on the same again,

we could also make it so that the movie then closes.

And so let's do that to finish this lecture.

So going back here, that's not too hard.

So right here, we can simply do a ternary operator.

So basically we can ask if the ID is equal

to the current one, then set the new selected ID to null.

So this means that we will now set the new state

based on the current one.

So let's just use the callback,

so selectedId,

and then we just say id equal to the already selectedId.

And if so, set the new one to null

and, otherwise, to the passed in ID.

So let's try that.

And if I click again, ah, then it closes.

Beautiful.

And so with this, we are now ready to, in the next lecture,

actually fetch the movie that corresponds

to the selected ID here.


//





















So let's now load movie details

about individual movies.

So essentially whenever this movie details component here

is going to mount, we will want to fetch the movie

corresponding to the selected ID.

So basically loading the currently selected movie.

So since we want to do that each time

that this component mounts,

that means that we will want a use effect.

So our effect function.

And then as I just said

we want this to happen each time the component renders.

And so that's simply the empty dependency array.

Now, okay, and now we want an async function.

And so well that's actually right async.

So async function

and let's call this one,

"Get movie details", okay?

And now let's actually come here to our API documentation.

And so now here what we want to do is to search by ID.

So here the parameter is now this I

which will receive exactly this type of IMDB ID

that we have been working with.

So let's actually grab the fetch from here

because it's very similar.

So basically just this,

and let's place it right here.

And so now this is why we hatch the key in a separate value

because here we of course need that key again.

Now, here it is I and then it is here, the selected ID.

Now, all right now you see that VS code.

And yes, lin are already complaining here

but we will for now not give them what they want basically.

So we first want to see what's going to happen.

So then let's grab the data here from the response

and of course await this data.

And then for now, let's just log it to the console, okay?

And this should already be working at this point

so let's reload.

And nothing happens, of course.

I mean VS code is even telling me about it by saying

that I didn't call the function there.

So let's try that again.

And immediately, actually it loaded my movie here.

So we see that this time we actually get all this data

about the movie, which again,

we didn't get simply here

when we searched for the movies, okay?

But now we want to get some of this data here

into our visible user interface.

So in a visible part of the component.

And so how do we do that?

Well, as always, we need a new piece of state.

So movie and set movie,

and here the default will now be an empty object

because an object is exactly

what we got back here from this API call.

And so now instead of logging that to the console

let's just do set movie to the data.

All right.

And so now we should be ready to use

that data here in our JSX.

So actually let's destructure now the object

because I really don't like these variable names here

all uppercase.

I have no idea why they did it this way.

So we will basically now the structure data

out of this movie.

So the title.

We will call title in our own code.

Then we will want the year,

which is simply called year.

We will want the poster,

we want the runtime,

we want the IMDB rating as well.

So this one is actually correct.

We want the plot,

the released date,

so released like this.

The actors array,

the director,

and finally also the genre of the movie.

Now, okay, so we have all these variables

which you see we haven't used yet.

Let's just use them here in

our rendering logic just so I can see you.

What's going to happen?

So maybe the title and the year.

And so let's reload.

Let's select this one.

And then you see that first we get undefined,

undefined and then after a second

we get the indeed the title and the year.

So why is that?

Well, here in the very beginning

of course when the component is initially mounted

then the movie is still this empty object here.

And so then title and year read

from that empty object are simply undefined.

So then this effect here starts and it gets the movie

and will then store it into our movie state.

And so then the component is rerendered.

And then of course this object is no longer empty.

And so then the rendering logic here will read all

of this data out of the object.

And so then we successfully log that

to the console over here all but anyway

let's now actually use this right in our JSX here.

So let's start with a header element.

So not a component, but really an element.

And in there we have an image,

which is the poster and then the alt image

or the alt tech actually.

So poster of the movie.

So this is a template literal

so it works a bit differently.

So what's the problem here now?

Ah, of course I didn't close the image.

Next we have a div with the class of details overview.

And so envious code, we can actually just type dot

and then the class name,

then hit tab and well that should actually

then create a div with that class.

So that has always worked for some reason.

Now that's not working.

So let's just do it manually then.

So H two for the title.

And here we are typing a lot of JSX.

And if you don't want to do that

then you can just get the code here

from the final files of this lecture.

So here we want to run time.

All right, released is not defined.

Re oh, well I didn't type that correctly.

Now that's already starting to look like something there.

Yeah, let's keep going here.

Next up we have the genre and then also the rating.

So here we're going to have like a star emoji.

And then here basically just the IMDB rating.

That's actually right, that there IMDB rating.

Yeah, that's looking really nice.

So that's the header part here.

And so now let's do a section element like this.

So a paragraph.

And in there I want some emphasized text,

which is going to be the movie plot.

Then staring the actors.

So this is just a string

And then just directed by the director.

All right, and there we go.

Nice. We still have the selected ID here

which we now no longer need.

All right, and now there's just one thing missing.

So if you come here,

you see that we have this rating component

and does this look familiar to you?

Well, we spent like an hour or more building that

so hopefully this is still familiar to you.

And so let's actually now grab

that star rating component that we built earlier.

So let's write star rating.

And I thought that it would actually get

automatically imported

but let's then do it manually.

So I think it should be right here in the same folder.

Yeah, so import star rating from, and then star rating.

Okay, now here we need the dot for the relative file.

And there it is.

Now it is a bit too big.

And also we want 10 stars, not just five.

So on IMDB, if you know the site.

then you know that their movies are rated from one to 10.

That's also why we have here the 8.8.

So here we can now use that API basically

that we built for this component.

So that's max rating to 10.

And then the size of 24, let's say.

So that's half the size by default I think.

And then let's also place this

into a div vertical class name of rating.

Okay, beautiful.

Now of course for now,

this rating is not being stored anyway or anywhere.

And so if we reload now and then of course it is gone.

But for now,

the component here is working pretty nice, isn't it?

But watch what happens

if I now try to select another movie here.

So let's say this one.

So nothing happened right now.

If I close this and then open up the second one here

for example, then you see that it's working fine.

But again, if I now click on another one,

then we got the same problem our component here

is not updating.

So why do you think that is?

What might be happening here?

Well, we told our effect here to load the movie

data whenever the component first mounts, right?

However, when we click here on one of these other movies

this component is actually not mount again.

So the initial render will not happen again

because the component is already mounted.

And the reason for that is the one that we learned

in the previous section, it is because this component here

so the movie detail component is rendered

in exactly the same place in a component tree.

And so as we click here on another movie

simply another prop will be passed into the component

but the component itself will not be destroyed.

It will stay in the component tree.

And so the only thing that is changing as we click on one

of the other movies is the ID prop that is being passed in.

So the selected ID prop

that's the only thing that is changing.

And so therefore, right now

this effect here will not run again because again,

it is only running when the component mounts

which really only happens once.

Now of course, if I close this and then go to another one

then the component has been unmounted first

and then it is mounting again.

And so therefore then it is going to work.

So how do we solve this?

Well, the answer lies again

right here in the dependency array.

So here, if we now pass in the selected ID

which is the prop that changes,

then let's see what happens.

So you saw that now it did actually work.

And so the reason is that now as the selected ID

prop changes, then the effect will indeed be executed again

because remember, this dependency array is a little bit like

an event listener that is listening

for one of the dependencies to change.

And so now as we click on another movie

this prop here will change.

And so yeah,

our effect is then executed again,

which gives us exactly the functionality

that we were looking for.

So that's really great and really powerful

and it's therefore also really important to

understand how exactly this dependency array works.

And now just one final thing

which is that watch what happens when I click

on one of the other movies actually here

well probably you cannot really see it because

you can't really see when I click,

but there is a visible delay between the click

and something changing here.

And so of course that's because in the background

the movie needs to be fetched.

So just like before,

what we want now is a quick loading indicator

just to let the user know that something is happening.

And so let's do that exactly as before.

So we create a new is loading state

and then set is loading and we start with faults.

And then immediately before we start fetching

we set is loading to true.

And as soon as it is done,

we set it back to faults.

So just as simple as this.

And by the way, in this time here

we are not handling errors

but you could do that just like we did in the beginning.

So if you want,

you can just go ahead and copy that basically.

But here, in order to save some time

I will just ignore the possibility of there being an error.

But anyway, let's now use that loading state.

And so let's do it right here.

So inside the details,

so we always want to return this div here

but if we are still loading,

so it's loading.

Then we want to now use again our loader components.

So a reusable component but if not,

then we want the header and the section.

And immediately you see the problem once again,

which is that this piece of JSX

has two root elements basically.

So it's the header and dissection,

which is not possible.

And so let's close that.

And actually here we need the JavaScript mode.

And yeah,

so you see the loading indicator there is very short

**but of course if our network was just a little bit slower**

then it makes a lot of sense

to have that loading indicator right there.

Great, so this was another very important part

of our application, and we did it pretty fast

because some parts were just the repetition of before

and we also wrote a lot of JSX here.

But yeah, of course the main part is here

the effect and understanding how the dependency array works.

So make sure to really get that.

And then let's move on

and actually make this rating here work

so that we can add a movie to our watch list.
