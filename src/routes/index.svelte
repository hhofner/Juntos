<script>
import { teams } from "$lib/stores.ts";
import Section from "../components/section.svelte";
import { Button } from "svelte-chota";

const tempData = {
  teams: [
  "ScovilleRunning",
  "ScovilleGeneral",
  "Home",
  "Fam"
  ],
  challenges: [
  {
    name: "January 15K",
    startDate: "2022-01-01",
    endDate: "2022-01-20",
    progress: 0,
    target: 15,
  },
  {
    name: "Personal 5K",
    startDate: "2022-01-01",
    endDate: "2022-01-20",
    progress: 7.5,
    target: 15,
  },
  ]
}
</script>

<Section title="Your Challenges">
  {#each tempData.challenges as challenge, index}
    <div class='challenge'>
      <div>
        <label for={index}>{challenge.name}</label>
        <progress id={index} max={challenge.target} value={challenge.progress}/>
        <small class='text-grey'> Deadline: {challenge.endDate} </small>
        <Button primary>record</Button>

<!--        TODO: Make these "owner" only-->
        <Button>edit</Button>
        <Button error>delete</Button>
      </div>
      <span>movement graphs</span>
    </div>
  {/each}
</Section>

<Section title="Your Teams" folded='true'>
  <ul>
    {#each $teams as team}
    <li>{team}</li>
    {/each}
  </ul>
</Section>
<Section title="Your Trophies" folded='true'/>

<style>
  .challenge {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2em;
  }
  small {
    display: block;
  }
</style>