<script lang="ts">
  import { fullWidth, link, button, boxShadow } from '../utils/styles';
  const backgroundImage = `aspect-[1520/700] rounded-md mb-10 bg-contain ${boxShadow}`;
  const title = 'text-lg font-bold mb-2';
  const paragraph = 'mb-6';
</script>

<div class={fullWidth}>
  <div class="max-w-3xl mx-auto">
    <div class={backgroundImage} style="background-image:url('/images/manual-basic.jpg')" />
    <div class="text-center mb-6">
      <a href="/downloads/Ripchord%202.7.0.zip" class={`${button} ${boxShadow} w-56`} download>
        Download Ripchord 2.7.0
      </a>
    </div>
    <div class={title}>
      About
    </div>
    <div class={paragraph}>
      Ripchord is a free MIDI plugin for creating and remixing chord progressions. You can create custom chord presets from scratch, load expansion packs, or import any MIDI file that contains chords and Ripchord will automatically create a preset from it. Ripchord helps you easily compose progressions by playing single notes to trigger full chords. You can watch the tutorial on YouTube: <a class={link} target="_blank" href="https://www.youtube.com/watch?v=7e3TJkv6qMA">Ripchord Overview</a>
    </div>
    <div class={title}>
      Expansion Packs
    </div>
    <div class={paragraph}>
      Anyone is welcome to make expansion packs for Ripchord, and give them away or sell them, without any further permission required. We don't sell any expansion packs directly, or take any kind of cut from third party expansion pack sales.
    </div>
    <div class={title}>
      Open Source
    </div>
    <div class={paragraph}>
      Ripchord is open source under GNU GPLv3. You can check out the source code on Github: <a class={link} target="_blank" href="https://github.com/trackbout/ripchord">Source Code</a>
    </div>
    <div class={title}>
      Plugin Formats
    </div>
    <div class={paragraph}>
      Ripchord is avalailable as an AU or VST3 for Mac, and a VST3 for Windows. We get a lot of requests for a VST2 version of Ripchord. Actually the first version of Ripchord we made was a VST2, and then we found out that Steinberg would not let us give it to anyone. Steinberg stopped granting any new VST2 licenses in 2018 because they are trying to retire the format, so unfortunately that is the end of the story. This also means that whatever DAW you use must support the full VST3 MIDI spec in order to use Ripchord. More details can be found here: <a class={link} target="_blank" href="https://helpcenter.steinberg.de/hc/en-us/articles/4409561018258">VST2 is Discontinued</a>
    </div>
    <div class={title}>
      Mac Installation
    </div>
    <div class={paragraph}>
      To install Ripchord on a Mac, drag the "Ripchord.vst3" file into your system's VST3 folder as pictured below. If you do not see a folder called "VST3" at that location, you have to create the folder yourself. If you're a Logic Pro user, drag the file called "Ripchord.component" into your system's Components folder. Some DAWs, such as Ableton, require an additional step of enabling VST3s in the DAW's preferences. Official docs from Steinberg can be found here: <a class={link} target="_blank" href="https://helpcenter.steinberg.de/hc/en-us/articles/115000171310">Mac VST3 Folder</a>
    </div>
    <div class={backgroundImage} style="background-image:url('/images/manual-mac.jpg')" />
    <div class={title}>
      Windows Installation
    </div>
    <div class={paragraph}>
      To install Ripchord on Windows, drag the "Ripchord.vst3" file into your system's VST3 folder as pictured below. If you do not see a folder called "VST3" at that location, you have to create the folder yourself. Some DAWs, such as Ableton, require an additional step of enabling VST3s in the DAW's preferences. Official docs from Steinberg can be found here: <a class={link} target="_blank" href="https://helpcenter.steinberg.de/hc/en-us/articles/115000177084">Windows VST3 Folder</a>
    </div>
    <div class={backgroundImage} style="background-image:url('/images/manual-win.jpg')" />
    <div class={title}>
      Play Mode
    </div>
    <div class={paragraph}>
      Ripchord has two modes, play and edit. Most of the time you will be in play mode, in which you can either play an external MIDI keyboard, or click on the input keys with a mouse, in order to trigger the chords in your preset and compose progressions.
    </div>
    <div class={backgroundImage} style="background-image:url('/images/manual-play.jpg')" />
    <div class="mb-10 -mt-4">
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          1.
        </div>
        <div class="pl-3">
          (Button) Favorites or unfavorites the currently loaded preset.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          2.
        </div>
        <div class="pl-3">
          (Button) Opens the menu.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          3.
        </div>
        <div class="pl-3">
          (Button) Allows the chords to be enabled or disabled while maintaining the MIDI routing.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          4.
        </div>
        <div class="pl-3">
          (Button) Contains any MIDI that has been recorded. When it is fully illuminated you can click and drag the MIDI from this button into your DAW.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          5.
        </div>
        <div class="pl-3">
          (Button) Switches between the presets view and the keyboards view.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          6.
        </div>
        <div class="pl-3">
          (Display) The name of the currently loaded preset will be displayed here.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          7.
        </div>
        <div class="pl-3">
          (Arrows) Select the next or previous presets in your collection. You can also use the left, right, up, and down keys on your computer's keyboard to trigger these buttons.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          8.
        </div>
        <div class="pl-3">
          (Button) Switches between play and edit mode.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          9.
        </div>
        <div class="pl-3">
          (Button) Clicking once enables MIDI recording. When enabled, recording will begin the moment the first input note is recieved. Clicking this button a second time will disable MIDI recording.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          10.
        </div>
        <div class="pl-3">
          (Button) Switches the direction of the velocity strum between always LTR, always RTL, LTR then alternate, or RTL then alternate. It can only be clicked if the velocity strum knob has been engaged.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          11.
        </div>
        <div class="pl-3">
          (Knob) Increases the velocity strum, which is the difference in velocity between the first and last notes of a chord. The difference will be spread evenly across all of the notes.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          12.
        </div>
        <div class="pl-3">
          (Knob) Increases the velocity humanization, which is random variation in velocity between all of the notes in the chord.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          13.
        </div>
        <div class="pl-3">
          (Button) Moves the transpose keys to the left on the input keyboard. It can only be clicked if the transpose button has been engaged.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          14.
        </div>
        <div class="pl-3">
          (Button) Engages the transpose keys. When engaged, the bottom two octaves of the input keyboard will operate in latch mode to transpose the chords in the preset up or down one full octave.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          15.
        </div>
        <div class="pl-3">
          (Button) Moves the transpose keys to the right on the input keyboard. It can only be clicked if the transpose button has been engaged.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          16.
        </div>
        <div class="pl-3">
          (Knob) Increases the note humanization, which is random variation in timing between all of the notes in the chord.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          17.
        </div>
        <div class="pl-3">
          (Knob) Increases the note strum, which is the difference in timing between the first and last notes of a chord. The difference will be spread evenly across all of the notes.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          18.
        </div>
        <div class="pl-3">
          (Button) Switches the direction of the note strum between always LTR, always RTL, LTR then alternate, or RTL then alternate. It can only be clicked if the note strum knob has been engaged.
        </div>
      </div>
    </div>
    <div class={title}>
      Edit Mode
    </div>
    <div class={paragraph}>
      Edit mode can be used to create a new preset from scratch, or to edit an existing preset. In edit mode, when you mouse click on the input keys, instead of triggering the chord, it will select the input key so that you can assign or modify the output keys that are mapped to it. You can still trigger the chords in edit mode if you have an external MIDI keyboard hooked up, that way you can preview the chords as you edit them.
    </div>
    <div class={backgroundImage} style="background-image:url('/images/manual-edit.jpg')" />
    <div class="mb-10 -mt-4">
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          1.
        </div>
        <div class="pl-3">
          (Input) Gives the currently selected chord a name. This input will only be present if at least one output note has been mapped to the currently selected chord.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          2.
        </div>
        <div class="pl-3">
          (Input) Gives the current preset a name.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          3.
        </div>
        <div class="pl-3">
          (Button) Shifts all of the input keys that have chords assigned to them to white keys.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          4.
        </div>
        <div class="pl-3">
          (Button) Shifts all of the input keys that have chords assigned to them to the left.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          5.
        </div>
        <div class="pl-3">
          (Button) Saves any changes that have been made to the current preset.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          6.
        </div>
        <div class="pl-3">
          (Button) Shifts all of the input keys that have chords assigned to them to the right.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          7.
        </div>
        <div class="pl-3">
          (Button) Shifts all of the input keys that have chords assigned to them to black keys.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          8.
        </div>
        <div class="pl-3">
          (Not pictured) You can right click on input keys that have chords assigned to them to cut, copy, and paste those chords to different input keys.
        </div>
      </div>
    </div>
    <div class={title}>
      Presets
    </div>
    <div class={paragraph}>
      This view allows you to easily organize and access your Ripchord presets. Presets are at the core of what Ripchord does. If no preset is loaded, Ripchord essentially does nothing.
    </div>
    <div class={backgroundImage} style="background-image:url('/images/manual-browser.jpg')" />
    <div class="mb-10 -mt-4">
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          1.
        </div>
        <div class="pl-3">
          (Button) Opens the Tag Manager where you can create and delete tags.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          2.
        </div>
        <div class="pl-3">
          (Button) Enables tag selection mode so you can assign tags to presets. More than one tag can be assigned to the same preset.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          3.
        </div>
        <div class="pl-3">
          (Button) Hides any presets that do not have that tag. More than one tag can be selected at once, which will display the union of their tagged presets.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          4.
        </div>
        <div class="pl-3">
          (Button) Hides any presets that have not been favorited.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          5.
        </div>
        <div class="pl-3">
          (Input) Filters out presets that don't match the text that has been entered.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          6.
        </div>
        <div class="pl-3">
          (Button) Switches between the presets view and the keyboards view.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          7.
        </div>
        <div class="pl-3">
          (Button) Favorites or unfavorites a preset.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          8.
        </div>
        <div class="pl-3">
          (Button) Deletes a preset. There is a confirmation step before the preset is deleted.
        </div>
      </div>
    </div>
    <div class={title}>
      Tag Manager
    </div>
    <div class={paragraph}>
      This modal allows you to create new tags, delete existing tags, and change their order.
    </div>
    <div class={backgroundImage} style="background-image:url('/images/manual-manager.jpg')" />
    <div class="mb-10 -mt-4">
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          1.
        </div>
        <div class="pl-3">
          (Input) Gives a new tag a name.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          2.
        </div>
        <div class="pl-3">
          (Button) Creates a new tag.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          3.
        </div>
        <div class="pl-3">
          (Arrows) Move the tag earlier or later in the list. This is the same order in which the tags will be displayed in the presets view.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          4.
        </div>
        <div class="pl-3">
          (Button) Deletes a tag. There is a confirmation step before the tag is deleted.
        </div>
      </div>
    </div>
    <div class={title}>
      Tag Selection
    </div>
    <div class={paragraph}>
      This mode allows you to assign the tags you have created to your presets.
    </div>
    <div class={backgroundImage} style="background-image:url('/images/manual-selector.jpg')" />
    <div class="mb-10 -mt-4">
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          1.
        </div>
        <div class="pl-3">
          (Button) Turns tag selection mode off.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          2.
        </div>
        <div class="pl-3">
          (Button) Activates the tag that presets will be assigned to. Only one tag can be active at a time.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          3.
        </div>
        <div class="pl-3">
          (Button) If there is an active tag selected, this assigns the active tag to the preset. More than one tag can be assigned to the same preset.
        </div>
      </div>
    </div>
    <div class={title}>
      Menu
    </div>
    <div class={paragraph}>
      The menu is where you can access various functions related to your Ripchord presets.
    </div>
    <div class={backgroundImage} style="background-image:url('/images/manual-menu.jpg')" />
    <div class="mb-10 -mt-4">
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          1.
        </div>
        <div class="pl-3">
          (Button) Selects the color mode. This setting will be applied to all instances of Ripchord.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          2.
        </div>
        <div class="pl-3">
          (Button) Begins the process of resetting the plugin to its default size. To complete the process, you must close and reopen the plugin.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          3.
        </div>
        <div class="pl-3">
          (Button) Unloads the currently loaded preset and initializes an empty one.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          4.
        </div>
        <div class="pl-3">
          (Button) Initializes a new, unnamed preset by making a copy of the currently loaded preset. It can only be clicked if a preset is currently loaded.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          5.
        </div>
        <div class="pl-3">
          (Button) Opens a file selection dialogue so you can import a single MIDI file, or multiple MIDI files at once. Ripchord will parse the MIDI files and automatically generate presets from them.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          6.
        </div>
        <div class="pl-3">
          (Button) Opens a location selection dialogue so you can export the currently loaded preset as a MIDI file. It can only be clicked if a preset is currently loaded.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          7.
        </div>
        <div class="pl-3">
          (Button) Opens a file selection dialogue so you can import a single preset file, or multiple preset files at once. To import multiple files, hold down the shift key while selecting them.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          8.
        </div>
        <div class="pl-3">
          (Button) Opens a location selection dialogue so you can export the currently loaded preset. It can only be clicked if a preset is currently loaded.
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-red-600 dark:text-red-400">
          9.
        </div>
        <div class="pl-3">
          (Button) Opens a file selection dialogue so you can import a single MPC file, or multiple MPC files at once. Ripchord will parse the MPC files and automatically generate presets from them.
        </div>
      </div>
    </div>
  </div>
</div>
