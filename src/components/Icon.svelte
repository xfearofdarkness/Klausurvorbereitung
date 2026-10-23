<script lang="ts">
  import { ICONS, type IconName } from "../lib/icons";

  interface Props {
    name: IconName;
  }

  let { name }: Props = $props();
</script>

<span class="icon" aria-hidden="true">{@html ICONS[name]}</span>
