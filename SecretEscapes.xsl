<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
                <table id="menuTable" class="indent">
                    <thead>
                        <tr>
                            <th colspan="4">SECRET ESCAPES Gateaways:</th>
                        </tr>
                        <tr>
                            <th>Select</th>
                            <th>Destination</th>
                            <th>Price</th>
                            <th>Day</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="/gateaways/section">
                            <tr>
                                <td colspan="4">
                                    <xsl:value-of select="@name" />
                                </td>
                            </tr>
                            <xsl:for-each select="entree">
                                <tr>
                                    <td align="center">
                                        <input name="item0" type="checkbox" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="destination" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="price" />
                                    </td>
                                     <td align="right">
                                        <xsl:value-of select="day" />
                                    </td>
                                </tr>
                            </xsl:for-each>
                        </xsl:for-each>
                    </tbody>
                </table>
    </xsl:template>
</xsl:stylesheet>