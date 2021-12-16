<script>
  import { teams } from "$lib/stores.ts";
  import Section from "../components/section.svelte";
  import Challenge from "../components/challenges/challenge.svelte";
  import { Card } from "svelte-chota";

  import tempData from "$lib/temp.json";
  import { fly } from 'svelte/transition';
  let visible = false;
</script>

<Section title="Your Challenges">
  {#each tempData.challenges as challenge (challenge.name)}
    <Challenge data={challenge}/>
  {/each}
</Section>

<Section title="Your Teams">
  <div class='teams'>
    {#each $teams as team}
    <Card>
      <img
        src='https://icongr.am/material/account-group-outline.svg?size=66&color=currentColor'
        alt='Team'
      />
      {team}
    </Card>
    {/each}
  </div>
</Section>
<Section title="Your Trophies" folded='true'/>
<button on:click={() => visible=!visible}>open</button>
{#if visible}
  <div class='test-modal' transition:fly="{{ y: 100, duration: 200 }}">
    tets
  </div>
{/if}


<style>
  .teams {
    display: flex;
    gap: 0.5rem;
  }
  .test-modal {
    position: absolute;
    width: 100px;
    height: 100px;
    background: blue;
  }
  img {
    display: block;
  }
</style>