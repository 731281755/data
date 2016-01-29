package com.meetyou.service;

import java.util.ArrayList;

import com.meetyou.entity.SearchData;
/**
 * <p>文件名称：WordService.java</p>
 * <p>文件描述：</p>
 * <p>版权所有： 版权所有(C)2013-2099</p>
 * <p>公   司： 美柚 </p>
 * <p>内容摘要： </p>
 * <p>其他说明： </p>
 *
 * @version 1.0
 * @author <a> href="mailto:linqisong@linggan.com">linqisong</a>
 * @since 2015-12-17 下午5:51:35
 */

public interface SearchDataService {
	public ArrayList<SearchData> getAllData();

    public ArrayList<SearchData> getData(String startDate, String endDate);

}
