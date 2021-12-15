<script>
import { teams } from "$lib/stores.ts";
import Section from "../components/section.svelte";
import Challenge from "../components/challenges/challenge.svelte";
import { Card } from "svelte-chota";

import tempData from "$lib/temp.json";
</script>

<Section title="Your Challenges">
  {#each tempData.challenges as challenge (challenge.name)}
    <Challenge data={challenge}/>
  {/each}
</Section>

<Section title="Your Teams" folded='true'>
  <div class='teams'>
    {#each $teams as team}
    <Card>
      <div><img src='https://icongr.am/material/account-group-outline.svg?size=66&color=currentColor'/></div>
      {team}
    </Card>
    {/each}
  </div>
</Section>
<Section title="Your Trophies" folded='true'/>

<style>
  .teams {
    display: flex;
    gap: 0.5rem;
  }
</style>