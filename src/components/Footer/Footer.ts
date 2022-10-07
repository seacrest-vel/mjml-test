import { createComponentFromMJML } from "../../lib/component";

export const FooterStyles = `
  .polisua-is {
    text-align: center !important;
}`


export const Footer = createComponentFromMJML(`
<mj-section>
  <mj-section padding="0">
    <mj-column padding="0">
      <mj-text mj-class="thank-you" font-family="Lato" font-weight="600">Дякуємо, що обираєте нас</mj-text>
    </mj-column>
  </mj-section>
  <mj-section>
    <mj-column>
      <mj-text font-weight="400" padding="0 48px" align="center" font-size="12px" line-height="15px" color="#374656" font-family="Montserrat">Polis.ua - фінансовий онлайн-супермаркет. Загальнодержавний сервіс порівняння та оформлення кращих страхових та фінансових продуктів України. Свідомі фінансові рішення в декілька кліків.</mj-text>
    </mj-column>
  </mj-section>

  <mj-section>
    <mj-column align="center">
      <mj-table>
        <tr><td align="center"><table border="0" cellpadding="0" cellspacing="0">
          <tr valign="top">
          <td align="center" style="padding-right: 10px;"><a href="https://facebook.com/polis.ua.insurance/" target="_blank"><img style="height: 24px; width: 24px;" src="https://polis.ua/static/img/email/green-card-purchase/facebook.png" alt="facebook icon" /></a></td>
          <td align="center" style="padding: 0 10px;"><a href="https://youtube.com/channel/UC_OX5i3CYGk9_QdI3nUruaw" target="_blank"><img style="height: 24px; width: 24px;" src="https://polis.ua/static/img/email/green-card-purchase/youtube.png" alt="youtube icon" /></a></td>
          <td align="center" style="padding: 0 10px;"><a href="https://t.me/Polis_ua" target="_blank"><img style="height: 24px; width: 24px;" src="https://polis.ua/static/img/email/green-card-purchase/telegram.png" alt="telegram icon" /></a></td>
          <td align="center" style="padding: 0 10px;"><a href="https://tiktok.com/@polis.ua" target="_blank"><img style="height: 24px; width: 24px;" src="https://polis.ua/static/img/email/green-card-purchase/tiktok.png" alt="tiktok icon" /></a></td>
          <td align="center" style="padding-left: 10px;"><a href="https://instagram.com/polis.ua/" target="_blank"><img style="height: 24px; width: 24px;" src="https://polis.ua/static/img/email/green-card-purchase/instagram.png" alt="instagram icon" /></a></td>
          </tr>
        </table><td></tr>
      </mj-table>
    </mj-column>
  </mj-section>
</mj-section>
`)