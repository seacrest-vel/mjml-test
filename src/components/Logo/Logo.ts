import { createComponentFromMJML } from "../../lib/component";

export const Logo = createComponentFromMJML(`
<mj-section>
    <mj-column>
        <mj-image href="https://polis.ua/uk" target="_blanked" src="https://polis.ua/static/img/email/green-card-purchase/logo.png" alt="POLIS.UA" width="163" height="53"/>
    </mj-column>
</mj-section>
`);