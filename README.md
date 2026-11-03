# The Human Oversight Stress Test

A minimal interactive governance brief about the operational capacity behind human review. All scenarios are fictional. This is a workload feasibility model, not a safety or compliance assessment.

Open `index.html` in a browser, or serve this directory with any static HTTP server. No dependencies, analytics, external fonts or build step. Adjust the inputs or use a scenario; print the current results and decision brief with the print button.

Run `node test.cjs` to verify model arithmetic and threshold behaviour.

## Method

Daily review demand = decisions × review percentage. Capacity = reviewers × 360 minutes ÷ review time. Queue = max(0, previous queue + demand − capacity). The selected tolerance is working days × daily capacity, not an individual waiting-time guarantee. The first strict exceedance is reported. Calculations use unrounded values; displayed values are rounded. Break-even capacity has no resilience buffer.

This deterministic model assumes constant daily arrivals, uniform cases, an empty initial queue and six productive hours per reviewer. It does not model arrival variability, reviewer quality, missed escalations or actual waiting-time distributions. The interface explains these limitations and links to research context.

## Hosting

GitHub Pages: deploy from the `main` branch, root folder. Only the standalone artefact files belong in this repository.
