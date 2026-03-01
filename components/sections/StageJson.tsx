/* eslint-disable react/no-unescaped-entities */
import { LineBuilder } from "../shared/line-builder";

const stageData = {
  status: "Recherche stage ou alternance",
  dispo: "Dès mars 2026",
  domaines: "Développement logiciel, Data, DevOps",
  localisation: "Île-de-France, Noisy-le-Sec, hybride OK",
  perimetre: "Front, Back, Data, DevOps"
};

export function StageJson() {
  const lines = LineBuilder(stageData);

  return (
    <section id="news">
      <pre>
        <code>{lines}</code>
      </pre>
    </section>
  );
}
